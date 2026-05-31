---
title: "Implementering af LLM API"
date: 2026-04-27
weight: 60
session: "6 (27/04-26)"
topic: "LLM API Implementation"
tags: ["LLM", "API", "OpenAI", "GPT-4o-mini", "Backend", "Frontend", "AI"]
---

# Implementering af LLM API

Session: 6 (27/04-26)

## Indhold

- [Introduktion](#introduktion)
- [Hvad vi arbejdede med](#hvad-vi-arbejdede-med)
- [OpenAI API og opsætning](#openai-api-og-opsaetning)
- [Mine refleksioner](#mine-refleksioner)
- [Praktiske erfaringer](#praktiske-erfaringer)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion

I denne undervisning arbejdede vi videre med projektet fra den forrige session. Hvor fokus sidst var på design og planlægning af en AI-drevet applikation, handlede denne undervisning om at få løsningen implementeret i praksis.

Målet var at skabe en applikation, hvor en bruger kan indsende en praktikrapport, hvorefter en sprogmodel vurderer rapporten ud fra en rubric og returnerer et struktureret svar.

---

## Hvad vi arbejdede med

Vi arbejdede med at få de forskellige dele af systemet til at fungere sammen.

Brugeren skulle kunne indsende en rapport gennem en frontend, som derefter sender data videre til en backend. Backenden kommunikerer med OpenAI's API og sender rapporten sammen med de prompts, vi havde arbejdet med i den tidligere undervisning.

Når modellen har genereret et svar, sendes resultatet tilbage til backend og videre til frontend, hvor brugeren kan se vurderingen.

På den måde blev det tydeligt, hvordan en AI-model fungerer som en ekstern service i et større system fremfor som en selvstændig chatbot.

---

## OpenAI API og opsætning

Som en del af undervisningen oprettede vi en API-nøgle hos OpenAI, så vores applikation kunne kommunikere med modellen.

En API-nøgle fungerer som en form for adgangsbillet, der identificerer applikationen overfor OpenAI's tjenester. Derfor er det vigtigt, at nøglen ikke deles offentligt.

Vi arbejdede derfor med en `.env`-fil, som bruges til at gemme følsomme oplysninger uden at hardkode dem direkte i projektets kode.

Til projektet brugte vi modellen **GPT-4o-mini**. Denne model blev valgt, fordi den er billigere at bruge end de større modeller, samtidig med at den stadig leverer gode resultater til denne type opgave.

Derudover arbejdede vi med GitHub Secrets, så API-nøglen kunne bruges sikkert i forbindelse med deployment og CI/CD uden at blive gemt direkte i repository'et.

---

## Mine refleksioner

Denne undervisning føltes som et naturligt næste skridt efter den forrige session.

Hvor vi tidligere havde arbejdet med arkitektur, prompts og planlægning, begyndte vi nu at se hvordan det hele hænger sammen i praksis.

Jeg synes især, det var interessant at opleve, hvordan forholdsvis få linjer kode kan koble en applikation sammen med en avanceret sprogmodel. Samtidig blev det tydeligt, at det ikke kun handler om at få et API-kald til at virke. Promptdesign, strukturering af data og håndtering af svar har stadig stor betydning for kvaliteten af resultatet.

Jeg blev også mere opmærksom på, hvor mange komponenter der faktisk indgår i en AI-drevet løsning. Selvom brugeren kun ser en simpel brugerflade, foregår der meget kommunikation mellem frontend, backend og modellen bag kulisserne.

---

## Praktiske erfaringer

En af de vigtigste erfaringer fra denne undervisning var, at udvikling af AI-løsninger ofte handler om iteration.

Selvom API-forbindelsen virker, er det ikke nødvendigvis ensbetydende med, at resultatet er godt. Små ændringer i prompts kan have stor betydning for modellens svar, og derfor kræver løsningen løbende justering og test.

Jeg fik også en bedre forståelse for, hvordan man arbejder med eksterne services i praksis, herunder håndtering af API-nøgler, miljøvariabler og kommunikation mellem forskellige systemkomponenter.

Derudover arbejdede vi med debugging og fejlhåndtering. Når man er afhængig af en ekstern service, kan der opstå fejl, som man ikke nødvendigvis selv har direkte kontrol over. Derfor er det vigtigt at kunne identificere hvor i dataflowet problemet opstår.

---

## Konklusion

Denne session gav mig en bedre forståelse for, hvordan man går fra idé til fungerende AI-applikation.

Jeg begyndte især at forstå, hvordan frontend, backend og en sprogmodel samarbejder om at skabe en samlet løsning. Samtidig blev det tydeligt, at AI ikke står alene, men fungerer som én komponent i en større arkitektur.

Undervisningen gjorde det også mere konkret, hvordan store sprogmodeller kan integreres i softwareprojekter og bruges til at løse konkrete opgaver.

---

## Referencer

- https://aida.kursusmaterialer.dk/06-llm-api-impl/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
