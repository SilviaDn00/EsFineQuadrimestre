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
    // Metodo per recuperare e trasformare i dati delle persone
    fetchPeople() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:5223/api/Person/GetAllPeople');
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
}
exports.PersonService = PersonService;
