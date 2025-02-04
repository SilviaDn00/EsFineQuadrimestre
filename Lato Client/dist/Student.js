"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_js_1 = require("./Person.js");
class Student extends Person_js_1.Person {
    getDetails() {
        const age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        return `Studente: ${this.firstName} ${this.lastName} | Età: ${age} | Email: ${this.email}`;
    }
}
exports.Student = Student;
