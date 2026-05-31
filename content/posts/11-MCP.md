---
title: "MCP og brugerindsigt fra Engestofte Gods"
date: 2026-05-22
session: "11 (22/05-26)"
topic: "Model Context Protocol (MCP)"
tags: ["MCP", "AI", "Engestofte Gods", "Projekt", "Model Context Protocol"]
---

# MCP og brugerindsigt fra Engestofte Gods

Session: 11 (22/05-26)

## Indhold

* [Introduktion](#introduktion)
* [Hvad er MCP?](#hvad-er-mcp)
* [Hvordan fungerer MCP?](#hvordan-fungerer-mcp)
* [Samtale med Mette Marie og Lise](#samtale-med-mette-marie-og-lise)
* [Mine refleksioner](#mine-refleksioner)
* [Konklusion](#konklusion)
* [Referencer](#referencer)

---

## Introduktion

I denne undervisning blev vi introduceret til MCP (Model Context Protocol), som handler om, hvordan AI-modeller kan kommunikere med eksterne systemer og værktøjer.

Efter gennemgangen havde vi mulighed for at tale med Mette Marie og Lise fra Engestofte Gods om deres arbejdsgange og nogle af de udfordringer, de oplever i forbindelse med julemarkedet.

Samtalen gav et bedre indblik i de administrative opgaver omkring julemarkedet og gav samtidig nyttig viden til videreudviklingen af projektidéen omkring Engestofte Julemarked Assistent.

---

## Hvad er MCP?

MCP står for **Model Context Protocol**.

Det er en åben standard udviklet af Anthropic, som gør det muligt for AI-modeller at kommunikere med eksterne systemer og værktøjer.

Normalt arbejder en AI-model kun med den information, der sendes med i prompten. Hvis modellen mangler information, kan den ikke selv hente den.

Med MCP bliver det muligt at give AI-modellen adgang til andre systemer, så den kan hente information eller udføre handlinger uden at alt skal kopieres ind i prompten.

MCP kan derfor ses som en standardiseret måde at forbinde AI med databaser, filer, API'er og andre værktøjer.

---

## Hvordan fungerer MCP?

MCP består typisk af tre dele.

### AI-klienten

AI-klienten er den model eller applikation, som brugeren interagerer med.

### MCP-server

MCP-serveren fungerer som bindeled mellem AI-modellen og de systemer, der indeholder information.

Serveren kan eksempelvis hente data fra databaser, dokumenter, API'er eller andre systemer og returnere informationen i et format, som AI-modellen kan forstå.

### Eksterne systemer

De eksterne systemer er de kilder, hvor informationen ligger.

Det kan være alt fra databaser og dokumenter til projektstyringsværktøjer eller interne systemer.

På den måde kan AI-modellen få adgang til relevant information uden at have den direkte i sin træningsdata eller i prompten.

---

## Samtale med Mette Marie og Lise

Efter gennemgangen af MCP havde vi mulighed for at tale med Mette Marie og Lise fra Engestofte Gods.

Formålet med samtalen var at få afklaret nogle af de spørgsmål, der var opstået i forbindelse med projektidéen omkring Engestofte Julemarked Assistent.

Samtalen gav et bedre indblik i nogle af de administrative opgaver omkring julemarkedet. Blandt andet fik vi afklaret, hvilke oplysninger stadeholdere skal indsende, hvordan standpladser planlægges, og hvilke typer spørgsmål administrationen bruger mest tid på at håndtere.

Noget af det mest interessante var, at kommunikation via mails blev fremhævet som en af de mest tidskrævende opgaver. Derudover blev det tydeligt, at meget af arbejdet handler om at indsamle oplysninger fra stadeholdere og sikre, at alle nødvendige informationer er samlet ét sted.

Vi fik også svar på spørgsmål omkring standpladser og planlægning. Nogle stadeholdere har faste placeringer, mens andre placeres ud fra den aktuelle planlægning. Derudover skal stadeholdere blandt andet indsende kontaktoplysninger, produktbeskrivelser og billeder, som bruges i den videre administration.

Disse svar gjorde projektidéen mere konkret og gav et bedre grundlag for at forstå de udfordringer, som en potentiel AI-assistent skal hjælpe med at løse.

---

## Mine refleksioner

Jeg synes, MCP var interessant, fordi det viser en anden måde at arbejde med AI på end den, vi tidligere har arbejdet med gennem prompts, RAG og API-kald.

Tidligere har fokus primært været på at give AI den rigtige kontekst gennem prompts eller dokumenter. MCP viser i stedet, hvordan AI kan hente information direkte fra andre systemer, når det er nødvendigt.

Det fik mig til at tænke over, hvordan sådanne løsninger potentielt kunne bruges i større virksomheder, hvor information ofte er fordelt på mange forskellige systemer.

Samtidig var samtalen med Mette Marie og Lise værdifuld, fordi den gav et mere realistisk billede af de daglige arbejdsopgaver omkring julemarkedet. Det bekræftede også, at kommunikation og informationshåndtering fylder en stor del af arbejdet, hvilket passer godt med den retning, jeg har valgt for projektet.

Jeg synes også, det var interessant at se, hvor mange oplysninger administrationen skal holde styr på, og hvor meget koordinering der ligger bag et arrangement som julemarkedet. Det understreger, hvorfor værktøjer til strukturering og overblik kan være værdifulde.

---

## Konklusion

Denne session gav mig en introduktion til MCP og de muligheder, det giver for at forbinde AI med eksterne systemer.

Samtidig gav samtalen med Mette Marie og Lise værdifuld indsigt i arbejdsgangene omkring Engestofte Julemarked og de udfordringer, administrationen møder i hverdagen.

Både MCP og mødet med Engestofte gav nye perspektiver på, hvordan AI kan bruges som et værktøj til at understøtte eksisterende arbejdsgange og skabe bedre overblik over information.

---

## Referencer

* https://aida.kursusmaterialer.dk/11-mcp/
* https://aida.kursusmaterialer.dk/toolbox/mcp/mcp/
* https://aida.kursusmaterialer.dk/toolbox/mcp/mcp-tutorial/
* https://aida.kursusmaterialer.dk/toolbox/llm-integration/tjekliste/
