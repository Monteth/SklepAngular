import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {API_URL} from '../../app.constrants'

export class HelloBean {
  constructor(public message: string) {}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) {}

  executeHelloWorldBeanServiceWithPathVar(name) {
    return this.httpClient.get<HelloBean>(
      `${API_URL}/hello/path-variable/${name}`)
  }
}
