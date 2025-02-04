import { Person } from "./Person.js";
export class Teacher extends Person{

    getDetails(): string {
        const age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        return `Docente: ${this.firstName} ${this.lastName} | Età: ${age} | Email: ${this.email}`
    }
}