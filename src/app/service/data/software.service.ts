import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {API_URL} from '../../app.constrants'

@Injectable({
    providedIn: 'root'
})
export class SoftwareService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getSoftware(number: number) {
        return this.httpClient.get<Software[]>(
            API_URL + '/software/recommended/' + number)
    }

    getSoftwareSearch(name: string) {
        return this.httpClient.get<Software[]>(
            API_URL + '/software/search/' + name)
    }
}

export class Software {
    constructor(
        public idSoftware: number,
        public name: string,
        public description: string,
    ) {
    }
}
