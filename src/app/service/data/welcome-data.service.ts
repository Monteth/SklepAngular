import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

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
  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloBean>('http://localhost:8080/hello-bean')
  }

  executeHelloWorldBeanServiceWithPathVar(name) {
    return this.httpClient.get<HelloBean>(`http://localhost:8080/hello/path-variable/${name}`)
  }
}
