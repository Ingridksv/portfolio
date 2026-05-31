---
title: "Opsætning af chatbot til portfolio med Dify.ai"
date: 2026-04-17
description: "Opsætningsnoter til en Dify.ai-chatbot i portfolioen."
session: "3 (17/04-26)"
topic: "Opsætning af AI-chatbot med Dify.ai"
tags: ["Dify", "RAG", "chatbot", "knowledge base", "portfolio", "AI"]
---

# Opsætning af chatbot til portfolio med Dify.ai

Session: 3 (17/04-26)

## Introduktion

I undervisningen begyndte vi at arbejde mere praktisk med AI-chatbots ved hjælp af *Dify.ai*.

Formålet var blandt andet at bygge en chatbot til portfolioen, som kunne bruge vores egne dokumenter og blogindlæg som knowledge base.

Det gjorde det lettere for mig at forstå, hvordan retrieval fungerer i praksis, fordi vi selv arbejdede med upload af dokumenter, system prompts og chatbot-adfærd.

---

## Opsætning af chatbot

Vi startede med at åbne hjemmesiden:
https://dify.ai/

Her oprettede vi en bruger og begyndte derefter at oprette en ny chatbot.

I Dify.ai kan man vælge forskellige typer applikationer. Vi arbejdede med en chatbot-løsning, hvor AI’en kunne bruge dokumenter som vidensgrundlag.

Efter chatbotten var oprettet, arbejdede vi med opsætningen af en *knowledge base*. En knowledge base er den samling af dokumenter, som chatbotten må bruge som informationskilde.

Vi uploadede blandt andet Markdown-filer fra vores portfolio som datagrundlag til chatbotten. Det blev nævnt i undervisningen, at Markdown ofte fungerer bedre end PDF-filer, fordi Markdown er mere struktureret og lettere for AI-systemer at arbejde med.

Efter upload af dokumenterne begyndte Dify.ai automatisk at opdele teksterne i mindre dele, som kaldes *chunks*.

Chunks er mindre tekststykker, som systemet senere kan søge i, når brugeren stiller spørgsmål til chatbotten.

Disse chunks bliver derefter omdannet til *embeddings*.

Embeddings er matematiske repræsentationer af tekst, som gør det muligt for systemet at sammenligne betydningen af forskellige tekster og finde relevant indhold.

---

## Retrieval og chatbot-adfærd

I Dify.ai arbejdede vi også med retrieval-indstillinger.

*Retrieval* betyder, at systemet søger efter relevant information i knowledge basen, før AI’en genererer et svar.

Når en bruger stiller et spørgsmål, forsøger systemet at finde de chunks, som passer bedst til spørgsmålet. Disse tekststykker bliver derefter sendt videre til AI-modellen som kontekst.

Det gjorde det lettere for mig at forstå, hvordan chatbotten faktisk arbejder med information i praksis.

---

## Mine refleksioner

Jeg synes især, det var spændende at arbejde mere praktisk med AI og selv eksperimentere med knowledge bases og system prompts.

Tidligere havde jeg mest tænkt på AI som noget, der bare genererer tekst, men arbejdet med Dify.ai gjorde det tydeligere for mig, hvor stor betydning retrieval og datakvalitet faktisk har.

Jeg blev også overrasket over, hvor meget små ændringer i system prompten kunne påvirke chatbotens svar.

Det gjorde det mere tydeligt for mig, at udviklingen af AI-assistenter ikke kun handler om selve modellen, men også om:
- strukturering af data
- retrieval
- prompts
- brugeroplevelse
- kontrol over chatbotten

---

## Praktiske erfaringer

Under arbejdet med portfolio chatbotten oplevede jeg også nogle udfordringer i Dify.ai.

Blandt andet havde jeg problemer med chatbot-titlen, som ikke ville opdatere korrekt, selv efter ændringer og publicering.

Min løsning endte med at være at duplikere chatbotten, oprette en ny version med den korrekte titel og derefter slette den gamle chatbot.

Selvom problemet var forholdsvis simpelt, gav det mig en bedre forståelse for platformen og hvordan ændringer og publicering hænger sammen.

---

## Konklusion

Denne session gjorde det lettere for mig at forstå, hvordan RAG fungerer i praksis.

Ved selv at arbejde med Dify.ai, knowledge bases og system prompts begyndte jeg bedre at forstå, hvordan AI-chatbots kan styres gennem data, retrieval og instruktioner.

Det gjorde også tydeligt for mig, at kvaliteten af en AI-assistent ikke kun afhænger af modellen, men i høj grad også af data, struktur og designet omkring chatbotten.

---

## Referencer

- https://aida.kursusmaterialer.dk/03-rag-demo/
- https://docs.dify.ai/
- https://docs.dify.ai/api-reference/chats/send-chat-message
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
