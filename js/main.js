// CALCOLO COSTO VIAGGIO

let totalCost = distance * 0.21

if (age < 18) {
    totalCost = totalCost - totalCost * 0.2;
} else if (age >= 65) {
    totalCost = totalCost - totalCost * 0.4;
}

let finalCost = totalCost.toFixed(2);

distance = parseInt(distance);
age = parseInt(age);

function calculateTicketPrice(distance, age) {
    // Calcolo prezzo
    let basePricePerKm = 0.21;
    let price = distance * basePricePerKm;

    // Sconti in base all'età
    if (age < 18) {
        price *= 0.8; // 20% di sconto per gli under 18
    } else if (age >= 65) {
        price *= 0.6; // 40% di sconto per gli over 65
    }

    // Prezzo a due decimali
    return price.toFixed(2);
}

// INIZIO FUNZIONE 

function formHasBeenCompleted(event) {
    event.preventDefault();

    // Raccolta Dati
    let name = document.getElementById('name').value;
    let distance = document.getElementById('distance').value;
    let age = document.getElementById('age').value;
    // CALCOLO PREZZO
    let price = calculateTicketPrice(distance, age);

    // Stampo Dati sulla Console
    let informations = `
    --- Informazioni Utente ---
    Numero di Km: ${distance}
    Eta: ${age}
    Name: ${name}
    Prezzo finale: ${finalCost}
`

    console.log(informations);


    // Parte visualizzata in HTML
    document.getElementById("nameDisplay").innerText = `Nome: ${name}`;
    document.getElementById("distanceDisplay").innerText = `Distanza in Km: ${distance}`;
    document.getElementById("ageDisplay").innerText = `Età: ${age}`;
    document.getElementById("priceDisplay").innerText = `Prezzo Finale: ${price}€`;

    // Puoi fare altre operazioni qui, come nascondere il modulo e mostrare la card
    //document.getElementById("formTicket").classList.add("d-none");
    //document.getElementById("Ticket").classList.remove("d-none");
}