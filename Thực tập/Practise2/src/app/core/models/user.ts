import { Data } from "@angular/router";

export class User {
    private id : string;
    private firstName : string;
    private lastName : string;
    private email : string;
    private phone : string;
    private dateOfBirth : Date;
    private status : boolean;
    private socialLink : Array<string>;

    constructor (firstName? : string, 
                lastName? : string, 
                email? : string,
                phone? : string,
                dateOfBirth? : Date,
                status? : boolean,
                socialLink? : Array<string>) {
        firstName? this.firstName = firstName : this.firstName = "";
        lastName? this.lastName = lastName : this.lastName = "";
        email? this.email = email : this.email = "";
        phone? this.phone = phone : this.phone = "";
        dateOfBirth? this.dateOfBirth = new Date(dateOfBirth) : this.dateOfBirth = new Date();
        status != undefined ? this.status = status : this.status = false;
        socialLink? this.socialLink = [...socialLink] : this.socialLink = []
    }

    getId () : string {
        return this.id;
    }

    setId (id : string) {
        this.id = id;
    }

    setStatus (value : boolean) {
        this.status = value;
    }
}