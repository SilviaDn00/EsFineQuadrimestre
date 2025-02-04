"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Person_js_1 = require("./Person.js");
class Teacher extends Person_js_1.Person {
    getDetails() {
        const age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        return `Docente: ${this.firstName} ${this.lastName} | Età: ${age} | Email: ${this.email}`;
    }
}
exports.Teacher = Teacher;
