import { PersonService } from "./PersonService.js";

// Creazione di un'istanza del servizio
const personService = new PersonService();

// Funzione per recuperare e visualizzare tutte le persone
async function fetchAndDisplayPeople() {
    try {
        // Recupera le persone trasformate dal servizio
        const people = await personService.fetchPeople();
        
        // Visualizza i dettagli di ciascuna persona
        people.forEach((person) => {
            console.log(person.getDetails());
        });

    } catch (error) {
        console.error("Errore durante il recupero delle persone:", error);
    }
}

// Esegui la funzione per recuperare e visualizzare le persone
fetchAndDisplayPeople();