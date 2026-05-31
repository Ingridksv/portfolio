---
title: "Kodeagenter og AI-assisteret udvikling"
date: 2026-04-20
session: "4 (20/04-26)"
topic: "Kodeagenter"
tags: ["AI", "Kodeagenter", "LLM", "Codex", "VS Code", "Udvikling"]
---

# Kodeagenter og AI-assisteret udvikling

Session: 4 (20/04-26)

## Indhold

- [Introduktion](#introduktion)
- [Hvad er en kodeagent?](#hvad-er-en-kodeagent)
- [Hvad vi arbejdede med](#hvad-vi-arbejdede-med)
- [Prompting med Codex](#prompting-med-codex)
- [Mine refleksioner](#mine-refleksioner)
- [Praktiske erfaringer](#praktiske-erfaringer)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion

I denne session blev vi introduceret til kodeagenter og hvordan AI kan bruges mere aktivt i udviklingsprocessen.

Tidligere har jeg mest brugt AI til forklaringer, debugging og mindre kodeproblemer. I denne undervisning arbejdede vi i stedet med AI som en mere aktiv samarbejdspartner, hvor en kodeagent kunne hjælpe med at oprette filer, skrive kode og bygge en lille applikation ud fra en prompt.

Det gjorde det tydeligere for mig, at der er forskel på at få hjælp til enkelte kodeproblemer og at bruge en AI-agent til at arbejde mere selvstændigt med en udviklingsopgave.

---

## Hvad er en kodeagent?

En kodeagent er et AI-system, som kan hjælpe med programmeringsopgaver direkte i et udviklingsmiljø.

I stedet for kun at give kodeeksempler i en chat kan en kodeagent blandt andet analysere projektets filer, foreslå ændringer, oprette nye filer, rette kode og hjælpe med debugging.

I denne session arbejdede vi med Codex (eller Claude, hvis man hellere ville det) i VS Code. Codex kunne bruge vores prompt som udgangspunkt og derefter generere en løsning i projektet.

---

## Hvad vi arbejdede med

I undervisningen arbejdede vi med en meditationsquiz, som vores underviser havde lavet som case til arbejdet med kodeagenter og prompting.

Opgaven gik ud på at skrive prompts til en AI-agent, som derefter skulle generere hjemmesiden og quizfunktionaliteten ud fra de krav og instruktioner vi gav den.

Quizzen skulle blandt andet kunne vise spørgsmål ét ad gangen og bagefter vise resultatet, så brugeren kunne se sine svar, de korrekte svar og hvilke spørgsmål der var rigtige eller forkerte.

I starten blev det tydeligt, at hvis prompten ikke var præcis nok, kunne Codex godt lave en løsning, der teknisk fungerede, men som ikke helt fulgte den ønskede struktur. For eksempel kunne quizzen ende med at vise alle spørgsmål efter hinanden i stedet for at lade brugeren vælge et emne først.

Det viste mig, hvor vigtigt det er at beskrive både funktionalitet, struktur og begrænsninger tydeligt i prompten.

Du kan se den færdige meditationsquiz [her](https://ingridksv.github.io/portfolio/projects/meditation-quiz/).

---

## Prompting med Codex

En stor del af arbejdet handlede om at forbedre prompten løbende.

Det blev hurtigt tydeligt, at en kodeagent ikke bare “ved”, hvad man ønsker. Den arbejder ud fra den kontekst og de instruktioner, man giver den. Derfor har prompten stor betydning for resultatet.

Prompten skulle ikke kun sige, at der skulle laves en quiz. Den skulle også forklare, hvordan quizzen skulle fungere.

Jeg måtte blandt andet præcisere, at quizzen ikke skulle være én lang quiz med alle spørgsmål efter hinanden. Brugeren skulle selv kunne vælge hvilket emne de ville tage, og hvert emne skulle fungere som sin egen separate quiz.

Det betød, at prompten skulle beskrive:
- at quizzen skulle opdeles i emner
- at brugeren selv skulle vælge et emne
- at spørgsmålene kun måtte komme efter hinanden inden for det valgte emne
- at quizzen ikke automatisk måtte fortsætte til næste emne
- at resultatet kun skulle gælde den quiz, brugeren lige havde taget

Den prompt, jeg gav til Codex, samt de efterfølgende ændringer, kan ses [her](https://ingridksv.github.io/portfolio/posts/meditations-quiz-prompt/).

Jeg arbejdede også med at få Codex til at placere projektet korrekt i min Hugo-portfolio. Quizzen skulle ligge som en selvstændig lille HTML/CSS/JavaScript-applikation i `static/projects/meditation-quiz/`, så den kunne linkes fra portfolioen uden at ændre i resten af Hugo-projektet.

---

## Mine refleksioner

Noget af det vigtigste jeg tog med fra denne session var, hvor meget præcision betyder, når man arbejder med kodeagenter. Jeg oplevede flere gange, at små ændringer i prompten kunne ændre resultatet markant, selvom jeg egentlig syntes, jeg beskrev det samme.

Jeg havde ikke tidligere tænkt så meget over, at en prompt til kode ikke kun handler om at beskrive, hvad man vil have bygget. Den skal også beskrive hvordan løsningen skal struktureres, hvad agenten må ændre, og hvilke ting den ikke må gøre.

Det blev også tydeligt for mig, at AI-genereret kode ikke nødvendigvis er færdig første gang. Man skal stadig teste løsningen, opdage fejl, justere prompten og få agenten til at rette videre.

Jeg synes især, det var interessant at opleve, hvordan Codex kunne generere en stor del af hjemmesiden hurtigt, men stadig havde brug for tydelige instruktioner for at ramme det ønskede resultat.

Det gjorde mig mere opmærksom på, at AI kan være en stor hjælp i udviklingsprocessen, men at man stadig selv har ansvar for at forstå, teste og kvalitetssikre løsningen.

---

## Praktiske erfaringer

Under arbejdet med meditationsquizzen blev det tydeligt, at små ændringer i prompten kunne ændre resultatet meget.

Hvis prompten var for åben, lavede Codex nogle gange en løsning, der var mere generel end det jeg ønskede. Når prompten derimod beskrev præcist, at quiz-emner skulle vælges frivilligt fra forsiden, blev strukturen bedre.

Jeg lærte også, at det er vigtigt at afgrænse hvor agenten må arbejde. Når Codex arbejder i et eksisterende projekt, er det en god idé at skrive tydeligt, hvilke mapper og filer den må ændre, så den ikke kommer til at ændre i Hugo-konfigurationen eller andre blogindlæg.

I mit tilfælde gav det bedst mening at placere quizzen som en separat mini-applikation i `static/projects/meditation-quiz/`, fordi den dermed kan fungere uafhængigt af resten af portfolioen.

---

## Konklusion

Denne session gav mig en bedre forståelse for, hvordan kodeagenter kan bruges i softwareudvikling.

Jeg begyndte især at forstå, at arbejdet med kodeagenter ikke kun handler om at få AI til at skrive kode. Det handler også om at kunne formulere præcise prompts, give den rigtige kontekst, teste resultatet og rette løsningen iterativt.

Codex gjorde det muligt hurtigt at bygge en fungerende prototype, men processen viste også, at udvikleren stadig skal kunne vurdere om løsningen faktisk passer til formålet.

---

## Referencer

- https://aida.kursusmaterialer.dk/04-kodeagenter/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/