---
title: "Sparring, arkitektur og sikker brug af AI"
date: 2026-05-18
weight: 100
session: "10 (18/05-26)"
topic: "Sparring"
tags: ["AI", "Arkitektur", "Sikkerhed", "Kodeagenter", "Projekt"]
---

# Sparring, arkitektur og sikker brug af AI

Session: 10 (18/05-26)

## Indhold

- [Introduktion](#introduktion)
- [Arkitektur og dataflow](#arkitektur-og-dataflow)
- [Sikker brug af AI](#sikker-brug-af-ai)
- [Mine refleksioner](#mine-refleksioner)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion

I denne session var fokus på nogle af de tekniske overvejelser, der følger med udvikling af AI-drevne løsninger.

Der blev blandt andet talt om arkitektur, dataflow, API-integration, kodeagenter og sikker håndtering af API-nøgler og følsomme oplysninger.

Undervisningen gav et mere praktisk perspektiv på de emner, vi tidligere har arbejdet med, og satte fokus på de udfordringer, der opstår, når AI skal indgå som en del af et større system.

---

## Arkitektur og dataflow

Et centralt emne var arkitektur og dataflow.

Dataflow beskriver, hvordan information bevæger sig gennem et system. I en AI-drevet applikation kan data eksempelvis bevæge sig fra en bruger til en frontend, videre til en backend og derefter til en ekstern AI-model, før resultatet sendes tilbage til brugeren.

Det blev tydeligt, at det ikke er nok at fokusere på brugergrænsefladen. Man skal også forstå, hvordan systemets forskellige komponenter arbejder sammen, og hvordan data flyder mellem dem.

I forhold til mit eget projekt fik det mig til at tænke over, hvordan information fra stadeholdere, gæster og administration skal bevæge sig gennem systemet, og hvilke oplysninger der eventuelt skal sendes videre til en AI-model.

---

## Sikker brug af AI

En anden vigtig del af undervisningen handlede om sikkerhed.

Når man arbejder med AI-modeller og eksterne API'er, sender man ofte data ud af sit eget system. Derfor er det vigtigt at overveje, hvilke oplysninger der sendes, og om de indeholder følsomme data.

Vi talte blandt andet om:

- API-nøgler
- `.env`-filer
- secrets
- prompt injection
- kodeagenter

En API-nøgle fungerer som adgang til en ekstern service og bør aldrig deles offentligt. Derfor bør `.env`-filer altid placeres i `.gitignore`, så de ikke ved en fejl bliver lagt på GitHub.

Vi talte også om prompt injection, hvor en bruger forsøger at få en AI-model til at udføre handlinger eller afsløre informationer, som den ikke burde have adgang til.

Et eksempel kunne være en bruger, der forsøger at få adgang til systemets hemmelige nøgler eller interne dokumenter gennem en chatbot. Derfor er det vigtigt at bygge begrænsninger og sikkerhedsforanstaltninger ind i systemet.

---

## Mine refleksioner

Noget af det mest interessante ved denne undervisning var, at fokus flyttede sig fra, hvad AI kan gøre, til hvordan AI bør bruges ansvarligt.

Tidligere på kurset har vi arbejdet meget med mulighederne ved AI, chatbots, RAG og kodeagenter. Denne session mindede mig om, at man også skal tænke på sikkerhed, adgangskontrol og hvilke data der deles med eksterne systemer.

Det fik mig til at overveje mit eget projekt. Hvis en AI-assistent skal hjælpe med kommunikationen mellem administrationen og stadeholdere, bliver det vigtigt at sikre, at følsomme oplysninger ikke deles utilsigtet, og at administrationen fortsat har kontrol over de vigtigste beslutninger.

Jeg synes også, det var interessant at høre om risikoen ved kodeagenter. De kan være meget effektive, men de har potentielt adgang til mere information, end man måske umiddelbart tænker over. Derfor virker det vigtigt kun at give dem adgang til det, de faktisk har brug for.

---

## Konklusion

Denne session gav mig en bedre forståelse for de tekniske og sikkerhedsmæssige overvejelser, der følger med udvikling af AI-løsninger.

Jeg fik især en større forståelse for dataflow, sikker håndtering af API-nøgler og de risici, der kan opstå ved brug af kodeagenter og eksterne AI-modeller.

Det gjorde det tydeligt, at udvikling af AI-systemer ikke kun handler om funktionalitet, men også om ansvarlig håndtering af data og sikkerhed.

---

## Referencer

- https://aida.kursusmaterialer.dk/10-sparring/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
