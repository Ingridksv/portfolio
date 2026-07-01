---
title: "Systemudvikling"
date: 2026-06-11
weight: 110
topic: "Systemudvikling"
tags: ["Systemudvikling"]
---

# SYS-eksamen:

## 1. Kort kerneforklaring

Scrum er et agilt framework til produktudvikling. Det betyder, at Scrum ikke er en komplet projektmodel med alle detaljer fastlagt på forhånd, men en ramme for hvordan et team kan arbejde iterativt, få feedback løbende og tilpasse produktet undervejs.

Agile er tankegangen. Scrum er en konkret måde at arbejde agilt på.


> Agile er filosofien og værdierne bag en fleksibel udviklingsproces. Scrum er et framework, der omsætter de agile principper til roller, events og artefakter.

---

## 2. Hvad indeholder Scrum?

Scrum består især af tre ting:

1. Roller
2. Events
3. Artefakter

Derudover bygger Scrum på empirisme: transparens, inspektion og tilpasning.

### Roller i Scrum

| Rolle | Ansvar |
|---|---|
| Product Owner | Prioriterer produktets behov og Product Backlog. Sikrer at teamet arbejder på det mest værdifulde. |
| Scrum Master | Hjælper teamet med at følge Scrum, fjerner forhindringer og understøtter processen. |
| Developers | Udviklingsteamet, der planlægger og udfører arbejdet i sprintet. |

I vores projekt havde vi en Product Owner, som vi fik feedback fra, og vi arbejdede i teams med udviklingsopgaver, artefakter og sprintbaseret planlægning.

### Events i Scrum

| Event | Formål |
|---|---|
| Sprint | En tidsboks, hvor teamet arbejder mod et sprintmål. |
| Sprint Planning | Planlægning af hvad teamet vil lave i sprintet. |
| Daily Scrum | Kort statusmøde om fremdrift, blokeringer og næste skridt. |
| Sprint Review | Gennemgang af det færdige arbejde og feedback fra interessenter/PO. |
| Sprint Retrospective | Refleksion over samarbejde, proces og forbedringer til næste sprint. |

### Artefakter i Scrum

| Artefakt | Betydning |
|---|---|
| Product Backlog | Prioriteret liste over alt arbejde, ønsker, user stories, bugs og forbedringer. |
| Sprint Backlog | De opgaver teamet vælger til det aktuelle sprint. |
| Increment | Det færdige produktbidrag, som potentielt kan leveres efter sprintet. |

---

## 3. Agile vs. Scrum

Agile og Scrum er ikke det samme.

Agile er en tankegang, som handler om fleksibilitet, samarbejde, hurtig feedback og evnen til at reagere på ændringer.

Scrum er et framework, der hjælper teamet med at arbejde efter de agile principper.


> Agile handler om værdier og principper. Scrum er en konkret arbejdsform, hvor man bruger sprints, roller, events og artefakter til at arbejde agilt.

---

## 4. Scrum sammenlignet med Waterfall

### Waterfall

Waterfall er en sekventiel udviklingsmodel, hvor man typisk arbejder i faste faser:

1. Analyse
2. Design
3. Implementering
4. Test
5. Levering/drift

Fordele ved Waterfall:

- Det kan give god struktur.
- Det kan fungere godt, hvis kravene er stabile og kendte fra starten.
- Det er nemt at dokumentere faser og ansvar.

Ulemper ved Waterfall:

- Feedback kommer sent.
- Det er svært at ændre krav undervejs.
- Man risikerer at bygge noget, som brugeren ikke længere har brug for.

### Scrum

Scrum arbejder i korte iterationer, typisk sprints.

Fordele ved Scrum:

- Hurtigere feedback.
- Bedre mulighed for at justere krav.
- Teamet kan lære og forbedre processen løbende.
- Produktet kan udvikle sig i takt med ny viden.

Ulemper ved Scrum:

- Det kræver disciplin.
- Det kræver aktiv deltagelse fra team og Product Owner.
- Artefakter og backlog mister værdi, hvis de ikke bliver vedligeholdt.

### Refleksion i forhold til CareBridge

I CareBridge-projektet gav Scrum bedre mening end en ren Waterfall-model, fordi vores forståelse af krav, brugerbehov og tekniske løsninger ændrede sig undervejs. Vi havde brug for løbende feedback, justeringer og mulighed for at prioritere opgaver i backloggen.

> Waterfall kunne have givet mere struktur fra starten, men Scrum passede bedre til projektet, fordi krav og løsninger udviklede sig undervejs. Det gjorde det muligt at justere retning efter feedback fra Product Owner og efter vores egne erfaringer i sprintene.

---

## 5. Backlog

En backlog er en prioriteret liste over arbejde, der skal laves i projektet.

### Product Backlog

Product Backlog indeholder alt arbejde, der kan være relevant for produktet.

Det kan være:

- User stories
- Bugs
- Tekniske opgaver
- Forbedringer
- Analyseopgaver
- Dokumentationsopgaver

Product Owner har ansvar for prioritering af Product Backlog.

### Sprint Backlog

Sprint Backlog er den del af Product Backlog, som teamet vælger at arbejde med i et bestemt sprint.

Sprint Backlog viser altså, hvad teamet konkret arbejder på lige nu.

> Product Backlog er den samlede prioriterede liste over alt arbejde. Sprint Backlog er det udvalg af opgaver, teamet har valgt til det aktuelle sprint.

---

## 6. INVEST

INVEST er en huskeregel for gode user stories.

| Bogstav | Betydning | Forklaring |
|---|---|---|
| I | Independent | US bør kunne udvikles uafhængigt af andre stories. |
| N | Negotiable | US skal kunne diskuteres og justeres. |
| V | Valuable | US skal skabe værdi for brugeren eller produktet. |
| E | Estimable | Teamet skal kunne estimere arbejdet. |
| S | Small | US skal være lille nok til at kunne laves i et sprint. |
| T | Testable | Det skal være muligt at teste, om US er opfyldt. |

Eksempel på en user story:

> Som medarbejder vil jeg kunne søge efter en beboer, så jeg hurtigt kan finde relevante oplysninger.

Set med INVEST:

- Independent: Den kan i nogen grad laves som en selvstændig søgefunktion.
- Negotiable: Felter og filtrering kan diskuteres med Product Owner.
- Valuable: Den skaber værdi, fordi medarbejderen hurtigere kan finde beboere.
- Estimable: Teamet kan estimere søgefunktion, endpoint og UI.
- Small: Den kan afgrænses til en simpel søgning først.
- Testable: Man kan teste, om søgningen returnerer de rigtige beboere.


> INVEST bruges til at vurdere, om en user story er god nok til at arbejde med. Den skal være uafhængig, forhandlingsbar, værdifuld, estimerbar, lille og testbar.

---

## 7. Artefakter er gode at have – hvis de bruges rigtigt

Artefakter er dokumenter, modeller, boards eller andre hjælpemidler, der skaber fælles forståelse i projektet.

I Scrum er de centrale artefakter Product Backlog, Sprint Backlog og Increment. I vores projekt brugte vi også andre artefakter, for eksempel FigJam, mockups, klassediagrammer, ER-diagrammer, robusthedsdiagrammer, Definition of Done og retrospectives.

Den vigtigste refleksion:

> Artefakter skaber ikke værdi bare ved at eksistere. De skaber først værdi, når teamet bruger dem aktivt, opdaterer dem og tager beslutninger ud fra dem.

### Eksempler

FigJam kan skabe fælles forståelse, hvis teamet bruger det til at samle idéer, beslutninger og modeller.

Mockups kan gøre krav mere konkrete, hvis de bruges i dialog med Product Owner.

Definition of Done kan sikre kvalitet, hvis teamet faktisk bruger den, før en opgave flyttes til Done.

Backloggen kan skabe overblik, hvis den er prioriteret, opdateret og forståelig.

Retrospectives kan forbedre samarbejdet, hvis teamet ikke kun taler om problemer, men også laver konkrete handlinger til næste sprint.

### Kritisk refleksion

Hvis artefakter ikke bliver brugt rigtigt, kan de give falsk tryghed. Man kan tro, at teamet har fælles forståelse, fordi der findes et diagram eller et board, men hvis det ikke er opdateret, eller hvis teamet ikke bruger det, hjælper det ikke.


> Jeg har lært, at artefakter ikke automatisk giver struktur. De skal vedligeholdes og bruges aktivt. Ellers bliver de hurtigt forældede og kan skabe mere forvirring end værdi.

---

## 8. Scrum Board – ikke Taiga Board

Det er vigtigt at skelne mellem metoden og værktøjet.

Et Scrum Board er et visuelt overblik over sprintets arbejde.

Typiske kolonner kan være:

- To Do
- In Progress
- Review/Test
- Done

Taiga er kun værktøjet, som man kan bruge til at lave boardet.

Korrekt formulering:

> Vi brugte Taiga som værktøj til vores Scrum Board.

Ikke helt præcist:

> Vi brugte et Taiga Board.

Pointen er, at Scrum Boardet er arbejdsformen, mens Taiga er softwaren.


> Ligesom GitHub ikke er det samme som Git, er Taiga ikke det samme som Scrum Boardet.

---

## 9. Refleksion til eksamen


> I starten tænkte jeg mest på Scrum som møder og opgaver i et board. Undervejs blev det tydeligere for mig, at Scrum handler om transparens, feedback og løbende forbedring. Boardet, backloggen og artefakterne havde kun værdi, når vi brugte dem aktivt til at skabe overblik og fælles forståelse.

En stærk refleksion:

> Jeg lærte, at et agilt projekt stadig kræver struktur. Scrum betyder ikke, at man bare ændrer retning hele tiden. Det betyder, at man arbejder struktureret i korte iterationer og bruger feedback til at tage bedre beslutninger.

En anden stærk refleksion:

> Hvis jeg skulle gøre noget anderledes, ville jeg være mere konsekvent med backlog refinement, Definition of Done og vedligeholdelse af artefakter. Det ville have gjort det lettere for teamet at bevare fælles forståelse gennem hele projektet.

---

## 10. Korte svar du kan sige højt

### Hvad er Scrum?

> Scrum er et agilt framework, hvor man arbejder iterativt i sprints med faste roller, events og artefakter. Formålet er at skabe transparens, få feedback og løbende tilpasse produktet.

### Hvad er Agile?

> Agile er en tankegang og et sæt principper, der handler om fleksibilitet, samarbejde, hurtig feedback og evnen til at reagere på ændringer.

### Hvad er forskellen på Agile og Scrum?

> Agile er filosofien. Scrum er et framework, der hjælper teamet med at arbejde agilt i praksis.

### Hvad er en backlog?

> En backlog er en prioriteret liste over arbejde. Product Backlog indeholder alt relevant arbejde for produktet, mens Sprint Backlog indeholder det arbejde, teamet har valgt til det aktuelle sprint.

### Hvad er INVEST?

> INVEST er en huskeregel for gode user stories. De skal være Independent, Negotiable, Valuable, Estimable, Small og Testable.

### Hvorfor er artefakter vigtige?

> Artefakter er vigtige, fordi de kan skabe fælles forståelse og overblik. Men de giver kun værdi, hvis de bliver brugt og opdateret aktivt.

### Hvad er forskellen på Scrum Board og Taiga?

> Scrum Boardet er selve arbejdsformen til at visualisere sprintets opgaver. Taiga er bare værktøjet, vi brugte til at lave boardet.

### Hvorfor Scrum frem for Waterfall?

> Scrum passer godt, når krav og forståelse ændrer sig undervejs. Waterfall passer bedre, når kravene er stabile fra starten. I vores projekt gav Scrum mening, fordi vi havde brug for feedback, justering og løbende prioritering.

---

## 11. Mulige spørgsmål fra eksaminator

### Hvad indeholder Scrum?

Svar med roller, events og artefakter.

### Hvad er forskellen på Product Backlog og Sprint Backlog?

Product Backlog er hele listen. Sprint Backlog er udvalget til sprintet.

### Hvordan brugte I Scrum i projektet?

Svar med sprint, backlog, Scrum Board, reviews, retrospectives og feedback fra Product Owner.

### Hvad fungerede godt?

Artefakter, feedback, sprintstruktur og retrospectives kan nævnes.

### Hvad fungerede mindre godt?

Artefakter og backlog mister værdi, hvis de ikke opdateres eller bruges konsekvent.

### Hvad ville du gøre anderledes?

Mere konsekvent backlog refinement, tydeligere Definition of Done og bedre vedligeholdelse af artefakter.

### Hvorfor er INVEST relevant?

Det hjælper teamet med at skrive user stories, der er små, værdifulde og testbare.

### Er Scrum det samme som Agile?

Nej. Agile er tankegangen. Scrum er et framework.

---

## 12. Ekstra stærk afslutning

> Min vigtigste læring er, at Scrum ikke kun handler om at have et board eller holde møder. Scrum handler om at skabe transparens, få feedback og forbedre både produkt og proces løbende. Artefakter som backlog, mockups og diagrammer er gode, men kun hvis de bliver brugt rigtigt. Ellers bliver de bare dokumentation uden reel værdi.


| Begreb | Kort forklaring |
|---|---|
| Agile | Tankegang om fleksibel og iterativ udvikling. |
| Definition of Done | Fælles aftale om hvornår noget er færdigt. |
| Developers | Teamet der skaber incrementet. |
| Increment | Det færdige produktbidrag efter sprintet. |
| INVEST | Kriterier for gode user stories. |
| Product Backlog | Prioriteret liste over alt arbejde i produktet. |
| Product Owner | Prioriterer backlog og maksimerer produktværdi. |
| Retrospective | Refleksion over processen. |
| Review | Feedback på produktet. |
| Scrum | Agilt framework med roller, events og artefakter. |
| Scrum Board | Visuel oversigt over sprintets arbejde. |
| Scrum Master | Understøtter Scrum-processen og fjerner forhindringer. |
| Sprint | Fast periode hvor teamet arbejder mod et mål. |
| Sprint Backlog | Opgaver valgt til det aktuelle sprint. |
| User Story | Beskrivelse af brugerbehov og værdi. |