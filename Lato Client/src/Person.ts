export abstract class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    domain: string;

    constructor(id: number, FirstName: string, LastName: string, dateOfBirth: Date, domain: string) {
        this.id = id;
        this.firstName = FirstName;
        this.lastName = LastName;
        this.dateOfBirth = dateOfBirth;
        this.domain = domain;
    }
    get email(): string {
        return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}@${this.domain.toLowerCase()}.com`
    }

    abstract getDetails(): string;

}