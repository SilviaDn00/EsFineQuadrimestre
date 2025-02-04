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
// Creazione di un'istanza del servizio
const personService = new PersonService_js_1.PersonService();
// Funzione per recuperare e visualizzare tutte le persone
function fetchAndDisplayPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Recupera le persone trasformate dal servizio
            const people = yield personService.fetchPeople();
            // Visualizza i dettagli di ciascuna persona
            people.forEach((person) => {
                console.log(person.getDetails());
            });
        }
        catch (error) {
            console.error("Errore durante il recupero delle persone:", error);
        }
    });
}
// Esegui la funzione per recuperare e visualizzare le persone
fetchAndDisplayPeople();
