---
title: "AI-drevne applikationer og LLM API"
date: 2026-04-24
weight: 50
session: "5 (24/04-26)"
topic: "LLM API"
tags: ["LLM", "API", "AI", "Backend", "Integration"]
---

# AI-drevne applikationer og LLM API

Session: 5 (24/04-26)

## Indhold

- [Introduktion](#introduktion)
- [Hvad vi arbejdede med](#hvad-vi-arbejdede-med)
- [Dagens opgave](#dagens-opgave)
- [Mine refleksioner](#mine-refleksioner)
- [Praktiske erfaringer](#praktiske-erfaringer)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion

I denne undervisning arbejdede vi med AI-drevne applikationer og integration af store sprogmodeller gennem et LLM API.

Hvor vi tidligere havde arbejdet med chatbots, RAG og kodeagenter, fokuserede denne session på, hvordan AI kan indgå som en komponent i et større softwaresystem.

---

## Hvad vi arbejdede med

Vi gennemgik, hvordan en AI-drevet applikation typisk er opbygget.

En bruger interagerer først med en **frontend**, som er den del af systemet, brugeren ser og arbejder i. Frontenden sender derefter data videre til en **backend**, som håndterer logik, data og kommunikation med eksterne tjenester.

Backenden sender en forespørgsel til et **LLM API (Large Language Model Application Programming Interface)** og modtager derefter et svar fra modellen.

På den måde fungerer AI som en ekstern service, som resten af systemet kommunikerer med, fremfor at være selve applikationen.

Vi arbejdede også med begreberne **system prompt** og **user prompt**. En system prompt beskriver modellens rolle og adfærd, mens en user prompt er den konkrete besked eller opgave, som brugeren sender til modellen.

Derudover talte vi om nogle af de udfordringer, der opstår ved udvikling af AI-drevne løsninger. Blandt andet blev det tydeligt, at promptens opbygning har stor betydning for kvaliteten af modellens svar, og at output ofte bør struktureres, så det er lettere at anvende videre i kode.

---

## Dagens opgave

Dagens opgave var at påbegynde udviklingen af en mini-applikation, som skulle anvende et LLM API til at vurdere en opgave ud fra en rubric.

En **rubric** er et sæt vurderingskriterier, der bruges til at bedømme kvaliteten af en opgave eller besvarelse.

Opgaven gik ud på at udvikle et vurderingssystem til praktikrapporter. Ideen var, at en bruger skulle kunne uploade sin rapport som PDF, hvorefter AI'en kunne analysere dokumentet og vurdere det ud fra rubricens kriterier.

Vi nåede ikke at komme langt med selve implementeringen i denne undervisning, men vi fik planlagt løsningen og forberedt arbejdet til næste session.

---

## Mine refleksioner

Denne undervisning adskilte sig fra de tidligere sessioner.

Tidligere havde fokus primært været på at anvende AI gennem eksisterende værktøjer som chatbots og kodeagenter. Her begyndte vi i stedet at se på, hvordan man selv kan udvikle løsninger, hvor AI indgår som en integreret del af systemet.

Jeg synes især, det var interessant at begynde at se AI som en service, der kan kobles på en applikation, fremfor kun som noget man skriver med i en chat.

Samtidig blev jeg mere opmærksom på, hvor vigtigt det er at kunne styre modellens output. Hvis et svar skal bruges videre i kode, er det ikke nok, at det virker fornuftigt for et menneske. Det skal også være struktureret på en måde, som systemet kan arbejde videre med.

Det gjorde det tydeligere for mig, at udvikling af AI-løsninger ikke kun handler om selve modellen, men også om hvordan data bevæger sig gennem hele systemet.

---

## Praktiske erfaringer

Selvom vi ikke nåede langt med implementeringen, fik jeg en bedre forståelse for, hvordan en AI-drevet applikation fungerer bag brugerfladen.

Jeg fik et bedre overblik over sammenhængen mellem frontend, backend og modellen, samt hvordan de forskellige dele samarbejder om at skabe et resultat for brugeren.

Undervisningen gjorde det også lettere at forstå, hvorfor promptdesign fortsat spiller en vigtig rolle, selv når AI anvendes gennem et API fremfor i en traditionel chatbot.

---

## Konklusion

Denne session gav mig en bedre forståelse af, hvordan store sprogmodeller kan integreres i egne applikationer gennem API'er.

Jeg begyndte især at forstå, at AI ikke nødvendigvis er selve løsningen, men ofte blot én komponent i et større system. Samtidig blev jeg mere opmærksom på betydningen af promptdesign, dataflow og samspillet mellem frontend, backend og AI-modellen.

---

## Referencer

- https://aida.kursusmaterialer.dk/05-llm-api/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
