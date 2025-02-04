"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, FirstName, LastName, dateOfBirth, domain) {
        this.id = id;
        this.firstName = FirstName;
        this.lastName = LastName;
        this.dateOfBirth = dateOfBirth;
        this.domain = domain;
    }
    get email() {
        return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}@${this.domain.toLowerCase()}.com`;
    }
}
exports.Person = Person;
