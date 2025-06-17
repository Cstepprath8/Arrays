// Colin Stepprath


//Opdracht 1 ( Goud: OV-Chipkaart )
//Schrijf de bovenstaande gegevens om in een array met objecten.

const personen = [
  {
    id: 163821,
    naam: "Leo Daams",
    saldo: 34,
    woonplaats: "Den Bosch"
  },
  {
    id: 145032,
    naam: "Nicole Hops",
    saldo: 18,
    woonplaats: "Maastricht"
  }
];

//Nieuwe passagiers worden toegevoegd;
function voegPassagierToe(passagier) {
  personen.push(passagier);
}

voegPassagierToe({ id: 192608, naam: "Colin", saldo: 55, woonplaats: "Limburg" });

//Een passagier in- en uitchecken, waardoor het saldo veranderd;
function pasSaldoAan(id, bedrag) {
  const p = personen.find(p => p.id === id);
  if (p) {
    p.saldo += bedrag;
  }
}

pasSaldoAan(163821, -5); 
pasSaldoAan(145032, 10); 
pasSaldoAan(192608, -35); 

//Een passagier de OV-kaart opzeggen (verwijderen uit het systeem);

function verwijderPassagier(id) {
  const index = personen.findIndex(p => p.id === id);
  if (index !== -1) {
    personen.splice(index, 1);
  }
}

verwijderPassagier(192608); 

//De lijst met passagiers kunnen worden opgeroepen;
function toonPassagiers() {
  console.log(personen);
}


toonPassagiers();