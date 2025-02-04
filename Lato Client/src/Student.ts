import { Person } from "./Person.js";
export class Student extends Person{
    
    getDetails(): string {
        const age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        return `Studente: ${this.firstName} ${this.lastName} | Età: ${age} | Email: ${this.email}`
    }
}