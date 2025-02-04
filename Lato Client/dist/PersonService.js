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
exports.PersonService = void 0;
const Student_js_1 = require("./Student.js");
const Teacher_js_1 = require("./Teacher.js");
class PersonService {
    // Metodo per creare una persona
    createPerson(person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:5223/api/person', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(person),
                });
                if (response.ok) {
                    const newPerson = yield response.json();
                    console.log(`Nuova persona creata: ${newPerson.firstName} ${newPerson.lastName}`);
                }
                else {
                    console.error('Errore nella creazione della persona');
                }
            }
            catch (error) {
                console.error('Errore durante la creazione della persona', error);
            }
        });
    }
    // Metodo per recuperare e trasformare i dati delle persone
    getPeople() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:5223/api/person');
                if (!response.ok) {
                    throw new Error('Errore nella risposta');
                }
                const personData = yield response.json();
                // Mappa i dati delle persone e crea gli oggetti appropriati
                const people = personData.map((data) => {
                    if (data.domain === "Studenti") {
                        // Crea un oggetto Studente se il dominio è "Studenti"
                        return new Student_js_1.Student(data.id, data.firstName, data.lastName, new Date(data.dateOfBirth), data.domain);
                    }
                    else if (data.domain === "Docenti") {
                        // Crea un oggetto Docente se il dominio è "Docenti"
                        return new Teacher_js_1.Teacher(data.id, data.firstName, data.lastName, new Date(data.dateOfBirth), data.domain);
                    }
                    return null; // O un altro valore di default, se necessario
                }).filter((person) => person !== null); // Rimuove eventuali nulli
                return people;
            }
            catch (error) {
                console.error('Errore durante la chiamata API', error);
                throw error; // Rilancia l'errore per farlo gestire nel main
            }
        });
    }
    getPersonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:5223/api/person/${id}`);
                if (response.ok) {
                    const personData = yield response.json();
                    // Istanzia correttamente Studente o Docente in base al dominio
                    if (personData.domain === "Studenti") {
                        return new Student_js_1.Student(personData.id, personData.firstName, personData.lastName, new Date(personData.dateOfBirth), personData.domain);
                    }
                    else if (personData.domain === "Docenti") {
                        return new Teacher_js_1.Teacher(personData.id, personData.firstName, personData.lastName, new Date(personData.dateOfBirth), personData.domain);
                    }
                }
                else {
                    console.error('Persona non trovata');
                }
            }
            catch (error) {
                console.error('Errore durante il recupero della persona', error);
            }
            return null;
        });
    }
    // Metodo per aggiornare i dati di una persona
    updatePerson(id, updatedPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:5223/api/person/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedPerson),
                });
                if (response.ok) {
                    const person = yield response.json();
                    console.log(`Persona aggiornata: ${person.firstName} ${person.lastName}`);
                }
                else {
                    console.error('Errore nell\'aggiornamento della persona');
                }
            }
            catch (error) {
                console.error('Errore durante l\'aggiornamento della persona', error);
            }
        });
    }
    // Metodo per aggiornare l'email di una persona
    updatePersonEmail(id, newEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:5223/api/person/email${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEmail),
                });
                if (response.ok) {
                    const person = yield response.json();
                    console.log(`Email aggiornata per ${person.firstName} ${person.lastName}`);
                }
                else {
                    console.error('Errore nell\'aggiornamento dell\'email');
                }
            }
            catch (error) {
                console.error('Errore durante l\'aggiornamento dell\'email', error);
            }
        });
    }
    // Metodo per eliminare una persona
    deletePerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:5223/api/person/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    console.log(`Persona con ID ${id} eliminata con successo`);
                }
                else {
                    console.error('Errore nell\'eliminazione della persona');
                }
            }
            catch (error) {
                console.error('Errore durante l\'eliminazione della persona', error);
            }
        });
    }
}
exports.PersonService = PersonService;
