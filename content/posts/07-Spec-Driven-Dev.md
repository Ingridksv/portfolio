---
title: "Spec-Driven Development"
date: 2026-05-01
weight: 70
session: "7 (01/05-26)"
topic: "Spec-Driven Development"
tags: ["Spec-Driven Development", "AI", "Kodeagenter", "Softwareudvikling", "SDD"]
---

Session: 7 (01/05-26)

## Indhold

- [Introduktion](#introduktion)
- [Hvad undervisningen omhandlede](#hvad-undervisningen-omhandlede)
- [Spec-Driven Development](#spec-driven-development)
- [Mine refleksioner](#mine-refleksioner)
- [Praktiske erfaringer](#praktiske-erfaringer)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion

Denne session handlede om Spec-Driven Development (SDD) og hvordan AI-agenter påvirker måden, software udvikles på.

Materialet tager blandt andet udgangspunkt i Peter Naurs artikel *Programming as Theory Building*, som argumenterer for, at softwareudvikling ikke kun handler om at skrive kode. Når udviklere bygger et system, opbygger de samtidig en forståelse af systemet, domænet og de beslutninger, der ligger bag løsningen.

Sessionen introducerer også Spec-Driven Development som en moderne udviklingsmetode, hvor specifikationer bruges til at beskrive krav, regler og arkitektur, som AI-agenter derefter kan anvende til at implementere funktionalitet.

---

## Hvad undervisningen omhandlede

En stor del af materialet tager udgangspunkt i Peter Naurs syn på programmering.

Ifølge Naur består software ikke kun af kildekode. Når et system udvikles, opbygger udviklerne samtidig en forståelse af systemet og det problem, der skal løses. Denne forståelse beskriver han som en teori om systemet.

Materialet fremhæver blandt andet forholdet mellem den virkelige verden og programkoden, samt hvorfor dokumentation ikke nødvendigvis kan erstatte den forståelse, som udviklerne har opbygget gennem arbejdet med systemet.

Der lægges også vægt på, hvordan vigtig viden kan gå tabt, når personer forlader et projekt, og hvorfor nogle systemer med tiden kan blive så vanskelige at videreudvikle, at det i visse tilfælde kan være lettere at starte forfra.

Efter introduktionen til Peter Naurs tanker flytter fokus sig over på Spec-Driven Development og hvordan AI-agenter kan anvendes som en del af udviklingsprocessen.

---

## Spec-Driven Development

Spec-Driven Development handler om at flytte fokus fra implementering til specifikation.

I stedet for først at fokusere på, hvordan koden skal skrives, beskriver man først hvad systemet skal kunne, hvilke krav der gælder, hvilke begrænsninger der findes, og hvordan arkitekturen skal opbygges.

Disse beskrivelser kaldes specifikationer eller *specs*.

Tanken bag metoden er, at moderne AI-agenter allerede er dygtige til at generere kode. Det, de ofte mangler, er kontekst omkring projektets mål, regler og arkitektur. Derfor bliver udviklerens rolle i højere grad at beskrive problemet og definere rammerne for løsningen.

Et vigtigt begreb inden for Spec-Driven Development er en *constitution*. En constitution fungerer som et fælles sæt regler for projektet og beskriver blandt andet valg af teknologi, arkitektur og udviklingsprincipper.

På den måde fungerer specifikationerne som en fælles kilde til viden for både mennesker og AI-agenter.

---

## Mine refleksioner

Selvom jeg ikke deltog i selve undervisningen, synes jeg, at emnet var interessant at læse efterfølgende.

Det mest interessante for mig var koblingen mellem Peter Naurs tanker og moderne AI-værktøjer.

På den ene side gør AI det muligt at generere store mængder kode hurtigt. På den anden side understreger Naur, at kode alene ikke er nok. Hvis man ikke forstår systemet og de beslutninger, der ligger bag, kan det være svært at vedligeholde eller videreudvikle løsningen.

Jeg kunne også genkende noget af tankegangen fra mine egne projekter. Når jeg tidligere har arbejdet med backend-projekter eller Unity-spil, har jeg ofte haft bestemte regler for struktur og arkitektur. Jeg har eksempelvis flere gange ønsket at holde projekter simple, følge en bestemt arkitektur eller genbruge en struktur fra tidligere projekter.

Efter at have læst materialet kan jeg bedre se, at sådanne regler i virkeligheden fungerer som specifikationer, der hjælper både mennesker og AI med at arbejde i samme retning.

---

## Praktiske erfaringer

Materialet gjorde det tydeligt, at AI-agenter fungerer bedst, når de får tydelig kontekst.

Hvis specifikationerne er uklare, risikerer man at få løsninger, som teknisk set virker, men som ikke passer til projektets mål eller arkitektur. Derfor bliver det vigtigt at beskrive krav, begrænsninger og forventninger så præcist som muligt.

Jeg fik også en bedre forståelse for, hvorfor mange virksomheder arbejder mere struktureret med AI-assisteret udvikling. AI kan generere kode hurtigt, men det er stadig udvikleren, der skal definere retning, validere resultatet og sikre kvaliteten af løsningen.

---

## Konklusion

Denne session gav mig en bedre forståelse for sammenhængen mellem klassisk softwareudvikling og moderne AI-assisteret udvikling.

Jeg begyndte især at forstå, at software ikke kun består af kode, men også af den viden og forståelse, som udviklerne opbygger omkring systemet. Samtidig blev det tydeligt, hvordan Spec-Driven Development kan bruges til at give AI-agenter den kontekst, de har brug for, så de kan generere mere konsistente og brugbare løsninger.

Sessionen binder mange af de emner sammen, der tidligere er blevet introduceret på kurset, herunder RAG, kodeagenter, LLM API'er og promptdesign. Det gjorde det lettere for mig at se, hvordan AI kan indgå som en del af en moderne udviklingsproces.

---

## Referencer

- https://aida.kursusmaterialer.dk/07-spec-driven-dev/
- Peter Naur: *Programming as Theory Building*
- https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
