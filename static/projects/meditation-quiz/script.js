(function () {
  const app = document.querySelector("#app");
  const topics = Array.isArray(window.quizTopics) ? window.quizTopics : [];
  const storageKey = "meditationQuizResults:v1";

  const state = {
    topic: null,
    currentQuestionIndex: 0,
    selectedAnswer: "",
    hasAnswered: false,
    answers: []
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function readSavedResults() {
    try {
      const rawResults = window.localStorage.getItem(storageKey);
      const parsedResults = rawResults ? JSON.parse(rawResults) : {};
      return parsedResults && typeof parsedResults === "object" ? parsedResults : {};
    } catch (error) {
      return {};
    }
  }

  function writeSavedResults(results) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(results));
    } catch (error) {
      // If localStorage is blocked, the quiz still works without persistence.
    }
  }

  function saveResult(result) {
    const results = readSavedResults();
    results[result.topicId] = result;
    writeSavedResults(results);
  }

  function clearResults() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      writeSavedResults({});
    }

    renderTopicOverview();
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("da-DK", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  }

  function buildResult(topic, answers) {
    const correctCount = answers.filter(answer => answer.isCorrect).length;
    const wrongCount = answers.length - correctCount;
    const percent = Math.round((correctCount / topic.questions.length) * 100);

    return {
      topicId: topic.id,
      topicTitle: topic.title,
      topicNumber: topic.number,
      completedAt: new Date().toISOString(),
      correctCount,
      wrongCount,
      percent,
      totalQuestions: topic.questions.length,
      answers: answers.map(answer => ({ ...answer }))
    };
  }

  function renderTopicOverview() {
    resetState();

    if (!topics.length) {
      app.innerHTML = `
        <div class="panel">
          <h2>Ingen quizemner fundet</h2>
          <p>Tilføj quizdata i <code>quizData.js</code>.</p>
        </div>
      `;
      return;
    }

    const savedResults = readSavedResults();
    const completedCount = topics.filter(topic => savedResults[topic.id]).length;

    app.innerHTML = `
      <section class="topics-section" aria-labelledby="topics-heading">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Vælg din praksis</p>
            <h2 id="topics-heading">Quiz-emner</h2>
            <p>Hver quiz står alene, så du kan tage præcis det emne, der passer til din dag.</p>
          </div>
          <div class="overview-tools">
            <span class="completion-summary">${completedCount} af ${topics.length} gennemført</span>
            ${completedCount ? `<button class="text-button" type="button" data-action="clear-results">Ryd resultater</button>` : ""}
          </div>
        </div>

        <div class="topic-grid" aria-label="Quizemner">
          ${topics.map(topic => renderTopicCard(topic, savedResults[topic.id])).join("")}
        </div>
      </section>
    `;

    app.querySelectorAll("[data-start-topic]").forEach(button => {
      button.addEventListener("click", () => startTopic(button.dataset.startTopic));
    });

    app.querySelectorAll("[data-view-result]").forEach(button => {
      button.addEventListener("click", () => renderSavedResult(button.dataset.viewResult));
    });

    const clearButton = app.querySelector("[data-action='clear-results']");
    if (clearButton) {
      clearButton.addEventListener("click", clearResults);
    }
  }

  function renderTopicCard(topic, savedResult) {
    return `
      <article class="topic-card ${savedResult ? "is-completed" : ""}">
        <div class="topic-card-top">
          <span class="topic-number">${escapeHtml(topic.number)}</span>
          <span class="status-pill">${savedResult ? "Gennemført" : "Ikke gennemført"}</span>
        </div>

        <div class="topic-copy">
          <h3 class="topic-title">${escapeHtml(topic.title)}</h3>
          <p class="topic-description">${escapeHtml(topic.description)}</p>
        </div>

        <div class="topic-footer">
          ${savedResult ? renderTopicResultSummary(savedResult) : `
            <div class="empty-result">
              <span>${topic.questions.length} spørgsmål</span>
              <p>Klar når du er.</p>
            </div>
          `}

          <div class="topic-actions">
            <button class="primary-button" type="button" data-start-topic="${escapeHtml(topic.id)}">
              ${savedResult ? "Tag quiz igen" : "Start quiz"}
            </button>
            ${savedResult ? `
              <button class="secondary-button" type="button" data-view-result="${escapeHtml(topic.id)}">
                Se resultat igen
              </button>
            ` : ""}
          </div>
        </div>
      </article>
    `;
  }

  function renderTopicResultSummary(result) {
    const completedAt = formatDate(result.completedAt);

    return `
      <div class="saved-result">
        <div class="saved-score">
          <span>${result.percent}%</span>
          <p>Seneste score</p>
        </div>
        <div class="saved-details">
          <p>${result.correctCount} rigtige · ${result.wrongCount} forkerte</p>
          ${completedAt ? `<time datetime="${escapeHtml(result.completedAt)}">Senest ${escapeHtml(completedAt)}</time>` : ""}
        </div>
      </div>
    `;
  }

  function startTopic(topicId) {
    const topic = topics.find(item => item.id === topicId);
    if (!topic) {
      return;
    }

    state.topic = topic;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = "";
    state.hasAnswered = false;
    state.answers = [];

    renderQuestion();
  }

  function resetState() {
    state.topic = null;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = "";
    state.hasAnswered = false;
    state.answers = [];
  }

  function renderQuestion() {
    const question = state.topic.questions[state.currentQuestionIndex];
    const questionNumber = state.currentQuestionIndex + 1;
    const totalQuestions = state.topic.questions.length;
    const progress = Math.round((questionNumber / totalQuestions) * 100);
    const latestAnswer = state.hasAnswered ? state.answers[state.answers.length - 1] : null;
    const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1;

    app.innerHTML = `
      <article class="quiz-panel">
        <div class="quiz-topline">
          <button class="ghost-button" type="button" data-action="topics">Tilbage til emner</button>
          <span class="progress-label">Spørgsmål ${questionNumber} af ${totalQuestions}</span>
        </div>

        <div class="progress-track" aria-hidden="true">
          <span class="progress-fill" style="width: ${progress}%"></span>
        </div>

        <div class="question-block">
          <p class="topic-number">${escapeHtml(state.topic.number)}</p>
          <h2>${escapeHtml(state.topic.title)}</h2>
          <p class="question-text">${escapeHtml(question.question)}</p>
        </div>

        <div class="answers" role="radiogroup" aria-label="Svarmuligheder">
          ${question.options.map(option => renderOption(option, question.correctAnswer)).join("")}
        </div>

        <div id="feedback" class="feedback" aria-live="polite">
          ${latestAnswer ? renderFeedback(latestAnswer) : ""}
        </div>

        <div class="quiz-actions">
          <button
            class="primary-button"
            type="button"
            data-action="${state.hasAnswered ? "next" : "submit"}"
            ${state.selectedAnswer ? "" : "disabled"}
          >
            ${state.hasAnswered ? (isLastQuestion ? "Se resultat" : "Næste") : "Svar"}
          </button>
        </div>
      </article>
    `;

    app.querySelector("[data-action='topics']").addEventListener("click", renderTopicOverview);
    app.querySelectorAll("[data-answer]").forEach(button => {
      button.addEventListener("click", () => selectAnswer(button.dataset.answer));
    });

    if (state.hasAnswered) {
      app.querySelector("[data-action='next']").addEventListener("click", goToNextStep);
    } else {
      app.querySelector("[data-action='submit']").addEventListener("click", submitAnswer);
    }
  }

  function renderOption(option, correctAnswer) {
    const isSelected = option === state.selectedAnswer;
    const isCorrect = option === correctAnswer;
    const classes = ["answer-option"];

    if (isSelected) {
      classes.push("is-selected");
    }

    if (state.hasAnswered && isCorrect) {
      classes.push("is-correct");
    }

    if (state.hasAnswered && isSelected && !isCorrect) {
      classes.push("is-wrong");
    }

    return `
      <button
        class="${classes.join(" ")}"
        type="button"
        role="radio"
        aria-checked="${isSelected ? "true" : "false"}"
        data-answer="${escapeHtml(option)}"
        ${state.hasAnswered ? "disabled" : ""}
      >
        <span class="answer-dot" aria-hidden="true"></span>
        <span>${escapeHtml(option)}</span>
      </button>
    `;
  }

  function selectAnswer(answer) {
    if (state.hasAnswered) {
      return;
    }

    state.selectedAnswer = answer;
    renderQuestion();
  }

  function submitAnswer() {
    if (!state.selectedAnswer || state.hasAnswered) {
      return;
    }

    const question = state.topic.questions[state.currentQuestionIndex];
    const isCorrect = state.selectedAnswer === question.correctAnswer;

    state.hasAnswered = true;
    state.answers.push({
      question: question.question,
      selectedAnswer: state.selectedAnswer,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      isCorrect
    });

    renderQuestion();
  }

  function renderFeedback(answer) {
    return `
      <div class="feedback-box ${answer.isCorrect ? "feedback-correct" : "feedback-wrong"}">
        <strong>${answer.isCorrect ? "Rigtigt" : "Forkert"}</strong>
        <span>Det korrekte svar er: ${escapeHtml(answer.correctAnswer)}</span>
        ${answer.explanation ? `<p>${escapeHtml(answer.explanation)}</p>` : ""}
      </div>
    `;
  }

  function goToNextStep() {
    const isLastQuestion = state.currentQuestionIndex === state.topic.questions.length - 1;

    if (isLastQuestion) {
      const result = buildResult(state.topic, state.answers);
      saveResult(result);
      renderResultView(result);
      return;
    }

    state.currentQuestionIndex += 1;
    state.selectedAnswer = "";
    state.hasAnswered = false;
    renderQuestion();
  }

  function renderSavedResult(topicId) {
    const topic = topics.find(item => item.id === topicId);
    const savedResult = readSavedResults()[topicId];

    if (!topic || !savedResult) {
      renderTopicOverview();
      return;
    }

    state.topic = topic;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = "";
    state.hasAnswered = false;
    state.answers = Array.isArray(savedResult.answers) ? savedResult.answers.map(answer => ({ ...answer })) : [];

    renderResultView(savedResult);
  }

  function renderResultView(result) {
    const topic = topics.find(item => item.id === result.topicId) || state.topic;
    const completedAt = formatDate(result.completedAt);

    app.innerHTML = `
      <article class="result-panel">
        <div class="result-header">
          <p class="topic-number">${escapeHtml(result.topicNumber || topic.number)}</p>
          <h2>${escapeHtml(result.topicTitle || topic.title)}</h2>
          <p>
            ${completedAt ? `Seneste gennemførte forsøg: ${escapeHtml(completedAt)}.` : "Du har gennemført dette emne."}
          </p>
        </div>

        <div class="score-grid" aria-label="Resultat">
          <div class="score-box">
            <span>${result.correctCount}</span>
            <p>Rigtige svar</p>
          </div>
          <div class="score-box">
            <span>${result.wrongCount}</span>
            <p>Forkerte svar</p>
          </div>
          <div class="score-box">
            <span>${result.percent}%</span>
            <p>Score</p>
          </div>
        </div>

        <section class="review-list" aria-label="Quiz-oversigt">
          <h3>Quiz-oversigt</h3>
          ${result.answers.map((answer, index) => renderReviewItem(answer, index)).join("")}
        </section>

        <div class="result-actions">
          <button class="primary-button" type="button" data-action="retry">Prøv igen</button>
          <button class="secondary-button" type="button" data-action="topics">Tilbage til emner</button>
        </div>
      </article>
    `;

    app.querySelector("[data-action='retry']").addEventListener("click", () => startTopic(result.topicId));
    app.querySelector("[data-action='topics']").addEventListener("click", renderTopicOverview);
  }

  function renderReviewItem(answer, index) {
    const statusText = answer.isCorrect ? "Rigtigt" : "Forkert";

    return `
      <article class="review-item ${answer.isCorrect ? "review-correct" : "review-wrong"}">
        <div class="review-heading">
          <span>Spørgsmål ${index + 1}</span>
          <strong>${statusText}</strong>
        </div>
        <h4>${escapeHtml(answer.question)}</h4>
        <p><span>Dit svar:</span> ${escapeHtml(answer.selectedAnswer)}</p>
        <p><span>Korrekt svar:</span> ${escapeHtml(answer.correctAnswer)}</p>
        ${answer.explanation ? `<p class="review-explanation">${escapeHtml(answer.explanation)}</p>` : ""}
      </article>
    `;
  }

  renderTopicOverview();
})();
