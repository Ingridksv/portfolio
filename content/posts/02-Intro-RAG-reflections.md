---
title: "RAG, chatbots og virtuelle assistenter"
date: 2026-04-13
session: "2 & 3 (13+17/04-26)"
topic: "Introduktion til RAG"
tags: ["RAG", "LLM", "retrieval", "embeddings", "AI", "Dify"]
---

# RAG, chatbots og virtuelle assistenter

Session: 2 & 3 (13+17/04-26)

## Indhold

- [Introduktion](#introduktion)
- [Hvad er RAG?](#hvad-er-rag)
- [Hvorfor bruges RAG?](#hvorfor-bruges-rag)
- [Hvad vi arbejdede med](#hvad-vi-arbejdede-med)
- [System prompts og chatbot-adfærd](#system-prompts-og-chatbot-adfærd)
- [Mine refleksioner](#mine-refleksioner)
- [Praktiske erfaringer](#praktiske-erfaringer)
- [Konklusion](#konklusion)
- [Referencer](#referencer)

---

## Introduktion 

I disse sessioner blev vi introduceret til chatbots, virtuelle assistenter og Retrieval-Augmented Generation (RAG).

Vi arbejdede både med den teoretiske forståelse af RAG og med mere praktiske øvelser, hvor vi blandt andet byggede vores egne chatbots ved hjælp af Dify.ai.

Jeg synes især, det var interessant at begynde at forstå, at AI-systemer ikke nødvendigvis “ved” alting selv, men i stedet kan hente relevant information og bruge den som kontekst, før der bliver genereret et svar.

---

## Hvad er RAG?

Vi arbejdede med forskellen mellem en almindelig chatbot og en chatbot, som bruger RAG til at hente information fra eksterne kilder som dokumenter, databaser eller PDF-filer.

RAG står for *Retrieval-Augmented Generation* og er en teknik inden for kunstig intelligens. Den gør det muligt for AI-chatbots at svare præcist ud fra egne dokumenter eller databaser, i stedet for kun at generere svar ud fra modellens generelle træningsdata.

Teknikken fungerer primært således:

1. **Indeksering** (*Indexing*)  
Dokumenter bliver delt op i mindre dele, som kaldes *chunks*, og gemt, så systemet hurtigt kan søge i dem. Hver chunk omdannes til *embeddings*, som gør det muligt for systemet at sammenligne og finde relevant indhold.

2. **Hentning** (*Retrieval*)  
Når man stiller et spørgsmål, bliver spørgsmålet omdannet til *embeddings*. Systemet søger derefter efter de *chunks*, der minder mest om spørgsmålet og finder de mest relevante informationer fra de datakilder, man har uploadet eller godkendt. Dette kan eksempelvis være Markdown-filer, PDF-filer eller interne systemer.

3. **Generering** (*Generation*)  
AI’en bruger derefter de fundne chunks som kontekst til at generere et svar via en LLM (*Large Language Model*).

Vi blev også introduceret til begrebet *semantic search*. Semantic search betyder, at systemet ikke kun søger efter præcise ord, men også forsøger at forstå betydningen og konteksten bag spørgsmålet.

---

## Hvorfor bruges RAG?

En af fordelene ved RAG er, at systemet kan reducere hallucinationer.

Hallucinationer betyder, at AI’en genererer oplysninger, som lyder korrekte, men som faktisk er forkerte eller opdigtede.

Ved at bruge dokumenter som vidensgrundlag bliver svarene mere faktabaserede og præcise.

En anden fordel er, at man kan opdatere chatbotten uden at gen-træne hele modellen. Hvis man vil tilføje ny information, kan man blot uploade nye dokumenter til chatbotens knowledge base.

En *knowledge base* er den samling af dokumenter og data, som chatbotten må bruge som vidensgrundlag.

Det blev også nævnt i undervisningen, at RAG kan være relevant i virksomheder og organisationer, fordi man kan lade AI’en arbejde med interne dokumenter og politikker uden nødvendigvis at offentliggøre informationerne.

---

## Hvad vi arbejdede med 

I undervisningen arbejdede vi blandt andet med forskellige typer AI-chatbots og hvordan retrieval bruges til at finde relevant information.

Vi blev introduceret til begreber som:
- chunks
- embeddings
- semantic search
- knowledge bases
- retrieval

Selvom nogle af begreberne stadig virker lidt abstrakte for mig, begyndte jeg bedre at forstå, hvordan AI-systemer arbejder med kontekst og information.

Vi arbejdede også med forskellige perspektiver på brugen af RAG-systemer. Fra afsenderens perspektiv handlede det blandt andet om at få mere kontrol over chatbotens svar og gøre det lettere at opdatere information. Fra brugerens perspektiv handlede det mere om hurtigere adgang til relevant viden og mere præcise svar.

Derudover arbejdede vi med Dify.ai til at bygge vores egne chatbots til portfolioen. Jeg har skrevet mere om dette i et separat blogindlæg [her](https://ingridksv.github.io/portfolio/posts/chatbot-opsætning/).

---

## System prompts og chatbot-adfærd

En stor del af undervisningen handlede også om *system prompts*.

En system prompt er de instruktioner, som styrer chatbotens opførsel og svar. Det er blandt andet her man kan definere:
- hvordan chatbotten skal svare
- hvilke dokumenter den må bruge
- hvilken tone den skal have
- hvad den ikke må gøre

Et af eksemplerne var en studieordningsassistent, hvor chatbotten kun måtte bruge den uploadede studieordning som vidensgrundlag.

Hvis informationen ikke fandtes i dokumentet, skulle chatbotten i stedet svare:
> “Det fremgår ikke af studieordningen”

Chatbotten skulle samtidig svare på dansk, bruge et letforståeligt sprog og gerne henvise til relevante afsnit i studieordningen.

Det gjorde det tydeligt for mig, hvor stor betydning system prompten har for chatbotens opførsel og svar.

Du kan læse hele system prompten [her](https://ingridksv.github.io/portfolio/posts/Studieordningsassisten-system-prompt/).

---

## Mine refleksioner

Jeg synes især, det var spændende at begynde at arbejde mere praktisk med AI-chatbots og selv eksperimentere med knowledge bases og system prompts.

Før disse sessioner havde jeg mest fokus på selve modellen og hvordan den genererer svar, men undervisningen gjorde det tydeligere for mig, at kvaliteten af data og retrieval-processen også spiller en stor rolle.

Jeg blev også overrasket over, hvor vigtigt det er at strukturere sine data korrekt. Det blev blandt andet nævnt, at det ikke nødvendigvis giver gode resultater bare at uploade en PDF og håbe på det bedste.

Det gav især mening for mig, da vi også arbejder med Markdown i vores portfolio. Markdown virker mere struktureret og lettere at arbejde med, både for mennesker og AI-systemer.

Jeg synes samtidig, det var interessant at høre om forskellen på overfladisk og dyb brug af chatbots. Undervisningen gjorde mig opmærksom på, at AI ikke kun bør bruges som en “svarmaskine”, men også som et værktøj der kan understøtte refleksion, læring og forståelse.

Jeg synes også, det var spændende at se, hvor meget små ændringer i system prompts kan påvirke chatbotens svar og opførsel.

---

## Praktiske erfaringer 

Jeg fik en bedre forståelse for, hvordan moderne AI-chatbots fungerer bagved brugerfladen.

Tidligere havde jeg mest tænkt på chatbots som noget, der bare genererer tekst, men jeg begyndte bedre at forstå, hvordan retrieval og eksterne datakilder bruges til at gøre svar mere relevante og målrettede.

Jeg synes også, det var spændende at se forskellene mellem forskellige RAG-platforme og hvordan de hver især har forskellige styrker og begrænsninger i forhold til:
- opsætning
- retrieval
- håndtering af dokumenter
- debugging
- kontrol over svar
- håndtering af data

Det gjorde mig nysgerrig på selv at arbejde videre med AI-assistenter og undersøge, hvordan man kan bygge løsninger med egne data og knowledge bases.

---

## Konklusion

Disse sessioner gav mig en første introduktion til, hvordan RAG-systemer og AI-chatbots fungerer i praksis.

Jeg begyndte især at forstå sammenhængen mellem:
- data
- retrieval
- struktur
- system prompts
- kvaliteten af AI-genererede svar

Derudover blev jeg mere opmærksom på, hvor vigtigt det er at bruge AI kritisk og refleksivt fremfor kun at bruge det som en hurtig genvej til svar.

---

## Referencer 

- https://aida.kursusmaterialer.dk/02-rag/
- https://aida.kursusmaterialer.dk/03-rag-demo/
- https://aida.kursusmaterialer.dk/toolbox/ordliste/
- https://aida.kursusmaterialer.dk/02-rag/chatbots.pdf
- https://docs.dify.ai/