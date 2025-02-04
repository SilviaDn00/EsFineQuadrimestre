"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PersonService_js_1 = require("./PersonService.js");
const Student_js_1 = require("./Student.js");
// Creazione di un'istanza del servizio
const personService = new PersonService_js_1.PersonService();
function testOperations() {
    return __awaiter(this, void 0, void 0, function* () {
        const newStudent = new Student_js_1.Student('', // L'ID può essere lasciato vuoto se viene generato dal server
        'Nicolas', // Nome
        'Fortunello', // Cognome
        new Date('2000-01-01'), // Data di nascita
        'Studenti' // Dominio
        );
        // Chiamata per creare la persona
        yield personService.createPerson(newStudent);
        // Recupero di tutte le persone
        const people = yield personService.getPeople();
        people.forEach(person => console.log(person.getDetails()));
        // Recupero una persona per ID
        const person = yield personService.getPersonById('2c35d33e-cc85-45b0-8bcb-4933d4bd3d0a');
        if (person) {
            console.log("Ricerca tramite ID: ", person.getDetails());
        }
        // Aggiornamento dei dati di una persona
        if (person) {
            const updatedPerson = new Student_js_1.Student(person.id, 'Giovanni', 'Verdi', new Date('1999-05-20'), 'Studenti');
            yield personService.updatePerson(person.id, updatedPerson);
        }
        // Aggiornamento dell'email
        if (person) {
            yield personService.updatePersonEmail(person.id, 'nuovaemail@nuovoemail.com');
        }
        // Eliminazione di una persona
        if (person) {
            yield personService.deletePerson(person.id);
        }
    });
}
// Esegui le operazioni di test
testOperations();
