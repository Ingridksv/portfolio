const quizTopics = [
  {
    id: "quiz-0",
    number: "Quiz 0",
    title: "Om meditation - og vælge ikke at have et problem",
    description: "Grundlæggende spørgsmål om meditation og om ikke at gøre problemer ud af det, der opstår.",
    questions: [
      {
        question: "Målet med meditation er at være helt tom for tanker",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Hvor længe skal man meditere?",
        options: [
          "Det er lige meget",
          "20 minutter om dagen",
          "Så længe man på forhånd har besluttet sig for at gøre det",
          "Altid over 10 minutter ad gangen"
        ],
        correctAnswer: "Så længe man på forhånd har besluttet sig for at gøre det",
        explanation: ""
      },
      {
        question: "Man kan kun meditere rigtigt hvis man sidder i lotusstilling",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Meditation er en teknik",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Hvis jeg opdager, at jeg tænker på et problem, hvad gør jeg så?",
        options: [
          "Gennemgår instruktionerne og vender tilbage til meditationen",
          "Tænker på noget andet",
          "Ingenting - jeg er allerede fri af tankerne",
          "Skubber tankerne væk"
        ],
        correctAnswer: "Ingenting - jeg er allerede fri af tankerne",
        explanation: ""
      },
      {
        question: "Hvis jeg synes det er svært at meditere, hvad gør jeg så?",
        options: [
          "Så vælger jeg ikke at gøre et problem ud af det",
          "Så forsøger jeg at tænke på noget positivt",
          "Så gør jeg det forkert"
        ],
        correctAnswer: "Så vælger jeg ikke at gøre et problem ud af det",
        explanation: ""
      }
    ]
  },
  {
    id: "quiz-1",
    number: "Quiz 1",
    title: "Om at være stille",
    description: "Spørgsmål om den indre og ydre del af stilhed i meditation.",
    questions: [
      {
        question: "At være stille har både en indre og en ydre del",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "Den indre del betyder:",
        options: [
          "At jeg ikke forholder mig til tanker og følelser",
          "At alle tanker og følelser står stille",
          "At jeg kan fjerne alle tanker og følelser",
          "At jeg ikke dagdrømmer"
        ],
        correctAnswer: "At jeg ikke forholder mig til tanker og følelser",
        explanation: ""
      },
      {
        question: "Man kan ikke være stille når der er larm i nærheden?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Man kan godt være fuldkommen stille og samtidig have hovedet fuld af tanker igennem hele meditationen?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "Man kan kun meditere hvis man sidder fuldkommen stille?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Stilhed er ...",
        options: [
          "en følelse",
          "en oplevelse",
          "en måde at have det på",
          "en indre position i forhold til tanker og følelser"
        ],
        correctAnswer: "en indre position i forhold til tanker og følelser",
        explanation: ""
      }
    ]
  },
  {
    id: "quiz-2",
    number: "Quiz 2",
    title: "Om at være afspændt (ease of being)",
    description: "Spørgsmål om afspændthed i kroppen og i forhold til oplevelsen.",
    questions: [
      {
        question: "Den indre del af instruktionen er den vigtigste?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "Det indre og ydre afspejler hinanden i meditationen. Hvad betyder det?",
        options: [
          "Hvis man ser anstrengt ud i ansigtet, så har man psykiske problemer",
          "At hvis man smiler, så virker meditationen bedre",
          "At hvis der er fred på ydersiden, så er der også fred på indersiden",
          "At hvis man er afspændt på ydersiden, er det lettere at være afspændt på indersiden og omvendt"
        ],
        correctAnswer: "At hvis man er afspændt på ydersiden, er det lettere at være afspændt på indersiden og omvendt",
        explanation: ""
      },
      {
        question: "Det gælder om at blive mere og mere afspændt i kroppen i løbet af meditationen?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "At være afspændt i forhold til sin oplevelse betyder, at vi",
        options: [
          "ikke blander os i hvad vi oplever",
          "observerer vores tanker og skubber dem væk",
          "ikke må føle noget når vi mediterer"
        ],
        correctAnswer: "ikke blander os i hvad vi oplever",
        explanation: ""
      },
      {
        question: "Meditation virker ikke hvis man er anspændt i kroppen",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Hvis jeg er helt afspændt i kroppen efter en meditation er det et tegn på at jeg har gjort det rigtigt?",
        options: ["Rigtigt", "Forkert", "Måske"],
        correctAnswer: "Måske",
        explanation: ""
      }
    ]
  },
  {
    id: "quiz-3",
    number: "Quiz 3",
    title: "Om at være opmærksom og lysvågen",
    description: "Spørgsmål om opmærksomhed, objekter i bevidstheden og lysvågenhed.",
    questions: [
      {
        question: "I denne meditationsform retter man sin opmærksomhed mod objekter i bevidstheden",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Objekter i bevidstheden er:",
        options: [
          "Tanker, følelser og lyde",
          "Alt som har en begyndelse og en afslutning",
          "Tanker og genstande"
        ],
        correctAnswer: "Alt som har en begyndelse og en afslutning",
        explanation: ""
      },
      {
        question: "Man kan ikke småsove og være opmærksom på samme tid?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "At være opmærksom i meditation er ...",
        options: [
          "at være opmærksom på alt, der rører sig i bevidstheden",
          "ikke at hænge fast i noget",
          "at være fast fokuseret på et punkt"
        ],
        correctAnswer: "ikke at hænge fast i noget",
        explanation: ""
      },
      {
        question: "Når man er opmærksom er der ingen tanker?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Man skal anstrenge sig for at være opmærksom?",
        options: ["Rigtigt", "Forkert", "Hverken rigtigt eller forkert"],
        correctAnswer: "Hverken rigtigt eller forkert",
        explanation: ""
      }
    ]
  },
  {
    id: "quiz-4",
    number: "Quiz 4",
    title: "Om at lade alting være",
    description: "Spørgsmål om at lade alting være, som det er, i meditation.",
    questions: [
      {
        question: "Hvis man overholder den første instruktion og er fuldkommen stille, så lader man også alting være?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "Du er dine tanker og følelser?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "At lade alting være, som det er, er det samme som at vælge ikke at have et problem?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      },
      {
        question: "At lade alting være som det er, betyder at man først og fremmest skal lade de negative tanker være?",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Forkert",
        explanation: ""
      },
      {
        question: "Når vi lader ALTING være, så har vi droppet vores relation til alt bevidsthedsindhold",
        options: ["Rigtigt", "Forkert"],
        correctAnswer: "Rigtigt",
        explanation: ""
      }
    ]
  }
];

window.quizTopics = quizTopics;
