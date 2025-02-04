import { PersonService } from "./PersonService.js";
import { Student } from "./Student.js";

// Creazione di un'istanza del servizio
const personService = new PersonService();

async function testOperations() {


    // Recupero di tutte le persone
    const people = await personService.getPeople();
    people.forEach(person => console.log(person.getDetails()));


    // // Recupero una persona per ID
    // const person = await personService.getPersonById('id-della-persona');
    // if (person) {
    //     console.log(person.getDetails());
    // }

    // // Aggiornamento dei dati di una persona
    // if (person) {
    //     const updatedPerson = new Student(person.id, 'Giovanni', 'Verdi', new Date('1999-05-20'), 'Studenti');
    //     await personService.updatePerson(person.id, updatedPerson);
    // }

    // // Aggiornamento dell'email
    // if (person) {
    //     await personService.updatePersonEmail(person.id, 'giovanni.verdi@nuovoemail.com');
    // }

    // // Eliminazione di una persona
    // if (person) {
    //     await personService.deletePerson(person.id);
    // }
}

// Esegui le operazioni di test
testOperations();

