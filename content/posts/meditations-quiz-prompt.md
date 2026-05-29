Dette er prompten, som jeg gav codex for at lave min meditations quiz side.

```Du arbejder i min Hugo/Blowfish portfolio.

Du skal bygge en selvstændig quiz-applikation om meditation helt fra bunden og placere den korrekt i portfolioen.

VIGTIG PLACERING:
Du må KUN oprette og ændre filer i denne mappe:

static/projects/meditation-quiz/

Hvis mappen ikke findes, skal du oprette den.

Du må IKKE ændre:
- config-filer
- themes/
- layouts/
- eksisterende blogposts
- eksisterende portfolio-indhold
- package.json
- Hugo-konfiguration
- public/

Projektet skal kunne åbnes på den færdige hjemmeside via:

/portfolio/projects/meditation-quiz/

Opret disse filer:

static/projects/meditation-quiz/index.html
static/projects/meditation-quiz/style.css
static/projects/meditation-quiz/script.js
static/projects/meditation-quiz/quizData.js

FORMÅL:
Byg en simpel, pæn og responsiv quiz-applikation om meditation.

Applikationen skal bruge de quizspørgsmål, jeg giver dig, som kilde til:
- spørgsmål
- svarmuligheder
- korrekt svar
- evt. forklaring

Bevar ordlyden fra quizmaterialet så tæt på originalen som muligt.

VIGTIG QUIZ-STRUKTUR:
Quizzen må IKKE være én lang quiz med alle spørgsmål efter hinanden.

Quizzen skal opdeles i separate emner/topics.

Brugeren skal selv aktivt kunne vælge, hvilket emne de vil tage quiz i.

Forsiden skal vise en oversigt over quiz-emner som klikbare kort eller knapper.

Eksempler på quiz-emner:
- Quiz 0 – Om meditation og at vælge ikke at have et problem
- Quiz 1 – Om at være stille
- Quiz 2 – Om at være afspændt
- Quiz 3 – Om at være opmærksom og lysvågen
- Quiz 4 – Om at lade alting være

Når brugeren klikker på et emne:
- start kun quizzen for det valgte emne
- vis kun spørgsmålene fra det valgte emne
- vis ét spørgsmål ad gangen

Quizzerne må ALDRIG automatisk fortsætte til næste emne.

Når en quiz er færdig:
- vis kun resultatet for den quiz, brugeren lige har taget
- vis ikke spørgsmål fra andre emner
- brugeren skal selv vælge, om de vil tilbage til emneoversigten og starte et andet emne

DATASTRUKTUR:
Strukturér quizspørgsmålene efter emne/topic, fx:

const quizTopics = [
  {
    id: "quiz-0",
    title: "Om meditation og at vælge ikke at have et problem",
    description: "Kort beskrivelse af emnet",
    questions: [
      {
        question: "...",
        options: ["...", "...", "..."],
        correctAnswer: "...",
        explanation: "..."
      }
    ]
  },
  {
    id: "quiz-1",
    title: "Om at være stille",
    description: "Kort beskrivelse af emnet",
    questions: [
      {
        question: "...",
        options: ["...", "...", "..."],
        correctAnswer: "...",
        explanation: "..."
      }
    ]
  }
];

Hvis quizmaterialet indeholder flere emner, skal de opdeles i samme struktur.

FUNKTIONALITET:
1. Lav en forside med titel, kort introduktion og oversigt over alle quiz-emner.
2. Brugeren skal aktivt vælge et emne for at starte en quiz.
3. Vis ét spørgsmål ad gangen indenfor det valgte emne.
4. Hvert spørgsmål må kun have ét korrekt svar.
5. Brug radiobuttons eller klikbare svarkort, så brugeren kun kan vælge ét svar.
6. Brugeren må ikke kunne gå videre uden at vælge et svar.
7. Når brugeren har svaret, skal det tydeligt vises:
   - om svaret var rigtigt eller forkert
   - hvilket svar der var korrekt
   - evt. en kort forklaring, hvis det giver mening
8. Brugeren skal derefter kunne trykke “Næste” for at fortsætte til næste spørgsmål i samme emne.
9. Når alle spørgsmål i det valgte emne er besvaret, skal resultat-siden vise:
   - quiz-emnets titel
   - antal rigtige svar
   - antal forkerte svar
   - procent-score
   - en tydelig quiz-oversigt over ALLE spørgsmål fra netop den quiz
10. Quiz-oversigten skal for hvert spørgsmål vise:
   - spørgsmålet
   - brugerens valgte svar
   - det korrekte svar
   - om brugerens svar var rigtigt eller forkert
   - grøn markering ved rigtigt svar
   - rød markering ved forkert svar
   - evt. en kort forklaring under spørgsmålet
11. Tilføj en “Prøv igen”-knap, som nulstiller den valgte quiz.
12. Tilføj en “Tilbage til emner”-knap, så brugeren kan vælge et andet quiz-emne.
13. Der må ikke være automatisk overgang fra ét emne til næste.

DESIGN:
- Designet skal være roligt, moderne og meditativt.
- Brug bløde farver, god afstand og et enkelt layout.
- Siden skal fungere godt på både mobil og desktop.
- Forsiden skal tydeligt vise quiz-emnerne som kort eller knapper.
- Tilføj gerne et simpelt meditationsinspireret logo eller ikon.
- Brug gerne meditative illustrationer eller baggrundsbilleder, men kun hvis de er frie at bruge.
- Hvis du ikke kan bruge eksterne billeder sikkert, så lav et simpelt visuelt design med CSS i stedet.

TEKNISKE KRAV:
- Brug ren HTML, CSS og JavaScript.
- Brug ikke React, Vite, npm eller andre frameworks.
- Brug ikke unødvendige afhængigheder.
- Quizzen skal kunne køres lokalt ved at åbne index.html i browseren.
- Koden skal være enkel, overskuelig og opdelt i de nævnte filer.
- Gem quizdata i quizData.js.
- Brug script.js til quizlogik.
- Brug style.css til styling.
- Sørg for at relative filstier virker, når projektet ligger i static/projects/meditation-quiz/.

ARBEJDSMÅDE:
1. Opret mappen static/projects/meditation-quiz/ hvis den ikke findes.
2. Opret index.html, style.css, script.js og quizData.js.
3. Indsæt quizspørgsmålene i quizData.js grupperet efter emne/topic.
4. Implementér forsiden med emnevalg.
5. Implementér quiz-flowet for ét valgt emne ad gangen.
6. Implementér resultat-siden med fuld oversigt over den quiz, brugeren lige har taget.
7. Test at brugeren kan:
   - vælge et valgfrit emne
   - gennemføre kun det valgte emne
   - se resultat og alle svar for det valgte emne
   - prøve samme quiz igen
   - gå tilbage og vælge et andet emne
8. Giv til sidst en kort oversigt over:
   - hvilke filer du har oprettet
   - hvordan jeg tester quizzen lokalt
   - hvad jeg skal linke til fra min portfolio

VIGTIGT:
- Der er kun ét korrekt svar per spørgsmål.
- Antag ikke flere korrekte svar.
- Quiz-emner skal være valgfrie.
- Quizzerne må IKKE komme efter hinanden automatisk.
- Kun spørgsmålene indenfor det valgte emne må komme efter hinanden.
- Hvis noget i quizmaterialet er uklart, så lav en tydelig TODO-kommentar eller spørg mig.
- Hvis du er i tvivl om større valg, fx designretning, emneopdeling eller quizstruktur, så stop og spørg mig først.
- Lad mig være sparringspartner gennem processen.
```
Jeg var ikke tilfreds med resultatet, så jeg fik chatGPT til at lave en ny prompt.

Her er resultatet af den første prompt:
[Billed]


Efterfølgende prompt:
```
Jeg vil gerne ændre logoet og den visuelle identitet, så den føles mere mindfulness-, meditation- og ro-inspireret.

Krav til nyt logo:
- Logoet skal føles roligt, minimalistisk og moderne.
- Undgå tech-/gaming-look.
- Brug et mere organisk og afslappende design.
- Inspiration må gerne være:
  - lotusblomst
  - solopgang
  - meditation
  - balance
  - åndedræt
  - natur
  - cirkler
  - sten
  - bølger
  - zen/minimalisme

Designstil:
- Simpelt og rent SVG- eller CSS-baseret logo.
- Skal passe godt til en meditativ quiz-applikation.
- Må gerne kombinere ikon + tekst.
- Brug bløde former fremfor skarpe kanter.
- Undgå for mange detaljer.

Farver:
- Brug rolige og afdæmpede farver.
- Fx:
  - sage green
  - sand/beige
  - varm hvid
  - støvet blå
  - lavendel
  - muted teal

UI/UX:
- Opdater gerne:
  - header
  - knapper
  - baggrund
  - cards
  - hover-effekter
så de passer til mindfulness-temaet.

Vigtigt:
- Behold stadig et moderne og professionelt udtryk.
- Designet skal stadig være responsivt.
- Gør ikke siden tung eller overdesignet.
- Hvis du ændrer farvepalette eller styling, så sørg for at hele appen stadig hænger visuelt sammen.

Vis mig gerne:
- hvilket logo-koncept du vælger
- hvilke farver du bruger
- hvilke filer du ændrer
før du laver større redesigns.
```

Codex's svar:

```
Ja, jeg stopper lige før redesign og foreslår retningen først.

Logo-Koncept

Jeg vil vælge et minimalistisk lotus-/solopgangslogo:

en blød cirkel som “rolig horisont”
3-5 simple lotusblade i afrundede linjer
en lille sol eller åndedrætscirkel i midten
tekst ved siden af: Meditationsquiz
Udtrykket bliver mere mindfulness/zen end tech: organisk, roligt og lidt naturinspireret.

Farver

Jeg foreslår denne palette:

Sage green: #7f9b8e
Muted teal: #4f7f78
Warm white: #fbfaf6
Sand: #e8dcc8
Soft lavender: #d8d2e8
Deep calm text: #263b36
Den holder appen lys, blød og professionel uden at blive tung.

Filer Jeg Vil Ændre

Kun disse:

static/projects/meditation-quiz/index.html

udskifte nuværende logo-markup med et rent inline SVG-logo
evt. justere headerens tekststruktur en smule
static/projects/meditation-quiz/style.css

opdatere farvepalette
gøre header, cards, knapper og hover-effekter mere rolige
blødere skygger, varmere baggrund, mere zen-præg
Jeg forventer ikke at ændre:

script.js
quizData.js
Vil du have, at jeg går videre med dette koncept?
```

Mit svar: 
```
Ja, gå videre med dette koncept, men tilføj også to forbedringer:

1. Bedre forside
Forsiden skal forbedres visuelt og funktionelt. Den skal føles mere som en rigtig landing page for en mindfulness-quiz.

Forsiden skal indeholde:
- nyt mindfulness-logo
- titel: Meditationsquiz
- kort og rolig introduktion
- quiz-emner vist som pæne kort
- tydelige knapper til at starte hver quiz
- et roligt og overskueligt layout
- bedre spacing, typografi og farver

2. Gem og vis tidligere quizresultater
Når brugeren har taget en quiz, skal resultatet gemmes lokalt i browseren med localStorage.

Når brugeren vender tilbage til forsiden, skal de kunne se hvilke quizzer de allerede har taget og deres resultater.

På forsiden skal hvert quiz-kort kunne vise:
- om quizzen er gennemført
- seneste score i procent
- antal rigtige og forkerte svar
- evt. dato/tidspunkt for seneste forsøg
- en knap eller et link til “Se resultat igen”

Når brugeren klikker “Se resultat igen”, skal appen vise resultatoversigten for den quiz igen, inkl.:
- alle spørgsmål fra den quiz
- brugerens valgte svar
- det korrekte svar
- grøn markering ved rigtigt svar
- rød markering ved forkert svar
- evt. forklaring

Vigtigt:
- Resultater skal kun gemmes for den enkelte quiz/topic.
- Quizzerne må stadig IKKE køre automatisk videre til næste emne.
- Brugeren skal stadig selv vælge hvilket emne de vil tage.
- “Prøv igen” skal overskrive det gemte resultat for den quiz, når quizzen gennemføres igen.
- Tilføj gerne en “Ryd resultater”-knap, men kun hvis den placeres diskret.

Du må gerne ændre:
- static/projects/meditation-quiz/index.html
- static/projects/meditation-quiz/style.css
- static/projects/meditation-quiz/script.js

Du må ikke ændre:
- quizData.js, medmindre det er nødvendigt for at understøtte quiz-id eller topic-id
- andre filer udenfor meditation-quiz-mappen

Behold quiz-indholdet og funktionaliteten. Ændr kun det nødvendige for redesign, bedre forside og gemte resultater.
```