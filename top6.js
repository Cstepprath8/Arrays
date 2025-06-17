// Colin Stepprath


//Opdracht 1 ( Brons: Top6 HitSongs )
//Maak een array aan met 6 songtitels om in de hitlijst te zetten.
const songteksten = ["Bohemian Rhapsody", "Imagine", "Like a Rolling Stone", "One Kiss", "Happy", "Stad van Licht"];

//Laat de eerste songtitel op het scherm zien
document.getElementById("song").innerHTML = songteksten[0];

//Verzoeknummer! Laat de derde songtitel uit de lijst zien.
document.getElementById("song").innerHTML = songteksten[2];

//4. De DJ wil alle nummers in de lijst zien. Gebruik een foreach-loop om alle nummers uit de lijst te tonen.
const SongElement = document.getElementById("song");

songteksten.forEach(function (song) {
    const nieuwLi = document.createElement("li");
    nieuwLi.textContent = song;
    SongElement.appendChild(nieuwLi);
});