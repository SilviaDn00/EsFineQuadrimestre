import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

export class PersonService {

    // Metodo per recuperare e trasformare i dati delle persone
    async getPeople(): Promise<(Student | Teacher)[]> {
        try {
            const response = await fetch('http://localhost:5223/api/person');
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

    // Metodo per creare una persona
    async createPerson(person: Student | Teacher): Promise<void> {
        try {
            const response = await fetch('http://localhost:5223/api/person', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(person),
            });

            if (response.ok) {
                const newPerson = await response.json();
                console.log(`Nuova persona creata: ${newPerson.firstName} ${newPerson.lastName}`);
            } else {
                console.error('Errore nella creazione della persona');
            }
        } catch (error) {
            console.error('Errore durante la creazione della persona', error);
        }
    }

    async getPersonById(id: string): Promise<Student | Teacher | null> {
        try {
            const response = await fetch('http://localhost:5223/api/person/e12e4f3c-4957-4d31-a2c2-5ee444bad514');

            if (response.ok) {
                const personData = await response.json();

                // Istanzia correttamente Studente o Docente in base al dominio
                if (personData.domain === "Studenti") {
                    return new Student(personData.id, personData.firstName, personData.lastName, new Date(personData.dateOfBirth), personData.domain);
                } else if (personData.domain === "Docenti") {
                    return new Teacher(personData.id, personData.firstName, personData.lastName, new Date(personData.dateOfBirth), personData.domain);
                }
            } else {
                console.error('Persona non trovata');
            }
        } catch (error) {
            console.error('Errore durante il recupero della persona', error);
        }
        return null;
    }

    // Metodo per aggiornare i dati di una persona
    async updatePerson(id: string, updatedPerson: Student | Teacher): Promise<void> {
        try {
            const response = await fetch(`http://localhost:5223/api/person/e12e4f3c-4957-4d31-a2c2-5ee444bad514`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPerson),
            });

            if (response.ok) {
                const person = await response.json();
                console.log(`Persona aggiornata: ${person.firstName} ${person.lastName}`);
            } else {
                console.error('Errore nell\'aggiornamento della persona');
            }
        } catch (error) {
            console.error('Errore durante l\'aggiornamento della persona', error);
        }
    }

    // Metodo per aggiornare l'email di una persona
    async updatePersonEmail(id: string, newEmail: string): Promise<void> {
        try {
            const response = await fetch(`http://localhost:5223/api/person/email{id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmail),
            });

            if (response.ok) {
                const person = await response.json();
                console.log(`Email aggiornata per ${person.firstName} ${person.lastName}`);
            } else {
                console.error('Errore nell\'aggiornamento dell\'email');
            }
        } catch (error) {
            console.error('Errore durante l\'aggiornamento dell\'email', error);
        }
    }

    // Metodo per eliminare una persona
    async deletePerson(id: string): Promise<void> {
        try {
            const response = await fetch(`http://localhost:5223/api/person/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Persona con ID ${id} eliminata con successo`);
            } else {
                console.error('Errore nell\'eliminazione della persona');
            }
        } catch (error) {
            console.error('Errore durante l\'eliminazione della persona', error);
        }
    }
}