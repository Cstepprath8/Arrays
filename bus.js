// Colin Stepprath


//Opdracht 1 ( Zilver: Busrit )
//Er zitten 10 mensen in de bus. Maak een array met daarin 10 namen. Laat deze namen op het scherm zien d.m.v. een for-loop.
const Bus_namen = ["Lars", "Piet", "Maria", "Ahmed", "Eva", "Jan", "Fatima", "Henk", "Sophia", "Mohammed "];

const BusElement = document.getElementById("Bus");

Bus_namen.forEach(function (Bus) {
    const nieuwLi = document.createElement("li");
    nieuwLi.textContent = Bus;
    BusElement.appendChild(nieuwLi);
});

//Iemand stapt de bus in. Voeg een nieuwe naam toe aan de bestaande array. Laat de gehele array op het scherm zien d.m.v. 
// een for-loop. Let op, de naam moet achteraf in de array worden toegevoegd met .push().
Bus_namen.push("Dirk");

const Push = Bus_namen[Bus_namen.length - 1];

const PushNaam = document.createElement("li");
PushNaam.textContent = Push;
BusElement.appendChild(PushNaam);

//De vijfde persoon stapt uit. Haal de vijfde naam uit de array. Laat de array op je scherm zien.
BusElement.innerHTML = "";

Bus_namen.splice(4, 1);

Bus_namen.forEach(function (Bus) {
    const nieuwLi = document.createElement("li");
    nieuwLi.textContent = Bus;
    BusElement.appendChild(nieuwLi);
});

//Shuffel de array en toon de nieuwe volgorde van de passagierslijst. Laat de nieuwe volgorde op het scherm zien.
BusElement.innerHTML = "";
const Bus_namen_shuffle = ["Piet", "Lars", "Jan", "Hank", "Sophia", "Maria", "Fatima", "Ahmed", "Eva", "Mohammed"];

Bus_namen_shuffle.forEach(function (Bus) {
    const nieuwLi = document.createElement("li");
    nieuwLi.textContent = Bus;
    BusElement.appendChild(nieuwLi);
});

//Maak een while-loop waarbij de passagiers één voor één uit de array worden gehaald.
//  Nadat iemand uitstapt wordt een teller getoond van hoeveel passagiers er nog in de array zitten.


// BusElement.innerHTML = "";

// const uitstapLijst = document.getElementById("uitstappers");

// while (Bus_namen.length > 0) {

//     const uitgestapt = Bus_namen.shift();

//     const li = document.createElement("li");
//     li.textContent = `${uitgestapt} stapt uit. ${Bus_namen.length} passagiers over.`;

//     uitstapLijst.appendChild(li);
// }


// Platina: vrije opdracht
//Bus een route laten rijde
// BusElement.innerHTML = "";

// const Bus_route = ["Ziekhuis", "Station", "Sporthal", "School", "Bibliotheek", "Winkelcentrum" , "Zwembad" , "Racebaan" , "Pretpark" ,"Wasstraat" ,"Winkel" ];

// const uitstaplijst = document.getElementById("uitstappers");
// const Bus_passagiers = [...Bus_namen_shuffle];

// for (let i = 0; i < Bus_route.length && Bus_passagiers.length > 0; i++) {
//     const uitgestapt = Bus_passagiers.shift();
//     const halte = Bus_route[i];
//     const li = document.createElement("li");

//     li.textContent = `${uitgestapt} stapt uit bij halte "${halte}". ${Bus_passagiers.length} passagiers over.`;
//     uitstaplijst.appendChild(li);
// }


//Geluidje wanneer de passagier in- of uitcheckt
const incheckBtn = document.getElementById("Inchecken");
const uitcheckBtn = document.getElementById("Uitchecken");
const incheckGeluid = new Audio("Geluid/inchecken.mp3");
const uitcheckGeluid = new Audio("Geluid/uitchecken.mp3");


let Bus_namen_checken = ["Lars", "Piet", "Maria", "Ahmed", "Eva"];


const Wachtende = ["Jan", "Fatima", "Henk", "Sophia", "Mohammed", "Dirk"];


function updateBusWeergave() {
    BusElement.innerHTML = "";
    Bus_namen_checken.forEach((naam) => {
        const li = document.createElement("li");
        li.textContent = naam;
        BusElement.appendChild(li);
    });
}

incheckBtn.addEventListener("click", () => {
    if (Wachtende.length > 0) {
        const nieuw = Wachtende.shift();
        Bus_namen_checken.push(nieuw);
        incheckGeluid.play();
        updateBusWeergave();
    }
});


uitcheckBtn.addEventListener("click", () => {
    if (Bus_namen_checken.length > 0) {
        const weg = Bus_namen_checken.shift();
        uitcheckGeluid.play();
        updateBusWeergave();
    }
});


updateBusWeergave();

//Bus een route laten rijden
const bus = document.getElementById('bus');
const container = document.getElementById('bus-container');

let pos = 0;
let richting = 1; 
const snelheid = 2; 

function animateBus() {
  pos += richting * snelheid;


  if (pos > container.clientWidth - bus.clientWidth) {
    richting = -1;
    pos = container.clientWidth - bus.clientWidth;
  }
 
  if (pos < 0) {
    richting = 1;
    pos = 0;
  }

  bus.style.left = pos + 'px';

  requestAnimationFrame(animateBus);
}


animateBus();
