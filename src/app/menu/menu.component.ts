import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {el} from '@angular/platform-browser/testing/src/browser_util'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public searchString = ''

  constructor(private router: Router) { }

  ngOnInit() {
  }

    searchForApp(event) {
        this.searchString = event.target.input_search.value
        if (this.searchString.trim().length > 0) {
            this.router.navigate(['apps'], { queryParams: { search: (this.searchString.trim()) } } )
        } else {
            this.router.navigate(['apps'])
        }
    }
}
