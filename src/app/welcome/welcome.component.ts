import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessageFromService: string
  name = ''
  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  private getWelcomeMessage() {
    this.welcomeService.executeHelloWorldBeanServiceWithPathVar(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      // error => this.handleErrorResponse(error)
    )
  }

  private handleSuccessfullResponse(response) {
    this.welcomeMessageFromService = response.message
  }

  private handleErrorResponse(error) {
    this.welcomeMessageFromService = error.message
  }
}
