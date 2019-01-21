import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {API_URL} from 'src/app/app.constrants'

@Injectable({
    providedIn: 'root'
})
export class PatronService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getPupils(patronId: number) {
        return this.httpClient.get<PupilBean[]>(
            API_URL + '/account/pupils/' + patronId)
    }

    getPatron(email: string) {
        return this.httpClient.get<Patron>(
            'http://localhost:8080/patron/' + email)
    }
}

export class PupilBean {
    constructor(
        public idPupil: number,
        public email: string,
        public firstName: string,
        public lastName: string
    ) {}
}

export class Patron {
    constructor(
        public idPatron: number,
        public email: string,
        public firstName: string,
        public lastName: string,
        public subscriptionEnd: Date
    ) {}
}




