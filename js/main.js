// CALCOLO COSTO VIAGGIO

distance = parseInt(distance);
age = parseInt(age);

// Funzione
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

    // Ritorno del prezzo a due decimali
    return price.toFixed(2);
}

// INIZIO FUNZIONE FORM

function formHasBeenCompleted(event) {
    event.preventDefault();

    // Raccolta Dati
    let name = document.getElementById('name').value;
    let distance = document.getElementById('distance').value;
    let age = document.getElementById('age').value;
    let price = calculateTicketPrice(distance, age);

    // Parte visualizzata in HTML
    document.getElementById("nameDisplay").innerText = `Nome: ${name}`;
    document.getElementById("distanceDisplay").innerText = `Distanza in Km: ${distance}`;
    document.getElementById("ageDisplay").innerText = `Età: ${age}`;
    document.getElementById("priceDisplay").innerText = `Prezzo Finale: ${price}€`;

    // Stampo Dati sulla Console
    let informations = `
    --- Informazioni Utente ---
    Numero di Km: ${distance}
    Eta: ${age}
    Name: ${name}
    Prezzo finale: ${price}
    `
    console.log(informations);

    // Nascondere il modulo e mostrare la card - BONUS PER DOPO
    //document.getElementById("formTicket").classList.add("d-none");
    //document.getElementById("Ticket").classList.remove("d-none");
}
