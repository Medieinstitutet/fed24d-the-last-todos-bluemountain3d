# 📌 Rättningsrapport – fed24d-the-last-todos-bluemountain3d

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Tfc19Mhg)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

[x] - Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
[x] - Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
[x] - Implementera klickhändelse för att hantera borttagandet av en todo.
[x] - Todo markeras som klar på skärmen och markeras som klar i javascript-listan.
[x] - Ni behöver använda localStorage så att listan inte börjar om från början varje gång sidan används.
[x] - Ni behöver använda er av en komponent.
[x] - Ni behöver använda er av state med en lista med objekt.

## Betyg VG

[x] - Alla punkter under G
[x] - Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
[x] - Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
[x] - Kunna sortera ordningen på dina todos.
[x] - Implementera ett valfritt grafiskt ramverk, t.ex. tailwind eller material ui.
[x] - Ni behöver ha minst tre komponenter.
[x] - Ni måste använda Lifting State Up.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-the-last-todos-bluemountain3d\src\utils\localStorage.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G och VG. Applikationen har en välimplementerad todo-funktionalitet med hantering av både aktiva och fullständiga uppgifter, möjlighet att skapa nya uppgifter, samt sätt att sortera och söka bland dessa. Användargränssnittet är byggt med Tailwind CSS vilket hjälper med stilhanteringen. Lifting state up används effektivt för att hantera delade tillstånd mellan komponenter. LocalStorage används korrekt för att spara användarens data.

💡 **Förbättringsförslag:**  
Koden kan förbättras genom att bryta ner vissa komponenter ytterligare för bättre läsbarhet och underhåll. Mer konsekvent typanvändning och namnkonventioner skulle också öka kodkvaliteten. Att inkludera fler enhetstester skulle dessutom förbättra koden genom att säkerställa att alla funktionaliteter fungerar som förväntat under olika scenarier.