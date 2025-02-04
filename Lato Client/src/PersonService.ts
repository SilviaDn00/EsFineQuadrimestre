import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

export class PersonService {

    // Metodo per recuperare e trasformare i dati delle persone
    async fetchPeople(): Promise<(Student | Teacher)[]> {
        try {
            const response = await fetch('http://localhost:5223/api/Person/GetAllPeople');
            if (!response.ok) {
                throw new Error('Errore nella risposta');
            }

            const personData = await response.json();

            // Mappa i dati delle persone e crea gli oggetti appropriati
            const people = personData.map((data: any) => {
                if (data.domain === "Studenti") {
                    // Crea un oggetto Studente se il dominio è "Studenti"
                    return new Student(data.id, data.firstName, data.lastName, new Date(data.dateOfBirth), data.domain);
                } else if (data.domain === "Docenti") {
                    // Crea un oggetto Docente se il dominio è "Docenti"
                    return new Teacher(data.id, data.firstName, data.lastName, new Date(data.dateOfBirth), data.domain);
                }
                return null; // O un altro valore di default, se necessario
            }).filter((person: Student | Teacher) => person !== null);  // Rimuove eventuali nulli

            return people;

        } catch (error) {
            console.error('Errore durante la chiamata API', error);
            throw error;  // Rilancia l'errore per farlo gestire nel main
        }
    }
}