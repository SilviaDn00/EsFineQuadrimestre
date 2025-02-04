import { PersonService } from "./PersonService.js";
import { Student } from "./Student.js";

// Creazione di un'istanza del servizio
const personService = new PersonService();

async function testOperations() {

    const newStudent = new Student(
        '', // L'ID può essere lasciato vuoto se viene generato dal server
        'Nicolas', // Nome
        'Fortunello', // Cognome
        new Date('2000-01-01'), // Data di nascita
        'Studenti' // Dominio
    );

    // Chiamata per creare la persona
    await personService.createPerson(newStudent);


    // Recupero di tutte le persone
    const people = await personService.getPeople();
    people.forEach(person => console.log(person.getDetails()));


    // Recupero una persona per ID
    const person = await personService.getPersonById('2c35d33e-cc85-45b0-8bcb-4933d4bd3d0a');
    if (person) {
        console.log("Ricerca tramite ID: ", person.getDetails());
    }

    // Aggiornamento dei dati di una persona
    if (person) {
        const updatedPerson = new Student(person.id, 'Giovanni', 'Verdi', new Date('1999-05-20'), 'Studenti');
        await personService.updatePerson(person.id, updatedPerson);
    }

    // Aggiornamento dell'email
    if (person) {
        await personService.updatePersonEmail(person.id, 'nuovaemail@nuovoemail.com');
    }

    // Eliminazione di una persona
    if (person) {
        await personService.deletePerson(person.id);
    }
}

// Esegui le operazioni di test
testOperations();

