import {Component, OnInit} from '@angular/core'
import {Software, SoftwareService} from '../service/data/software.service'
import {ActivatedRoute, NavigationStart, Router} from '@angular/router'
import {el} from '@angular/platform-browser/testing/src/browser_util'

@Component({
    selector: 'app-todo-list',
    templateUrl: './apps.component.html',
    styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

    public softList: Software[] = []
    private subReload
    private subRouteParams
    private searchString = ''

    constructor(
        private softwareService: SoftwareService,
        private router: Router,
        private route: ActivatedRoute) {
        // this.subReload = router.events.subscribe((event) => {
        //     if (event instanceof NavigationStart) {
        //         if (router.navigated) {
        //             this.obtainSoft()
        //         }
        //     }
        // })
    }

    ngOnInit() {
        this.subRouteParams = this.route
            .queryParams
            .subscribe(params => {
                this.searchString = params['search']
                if (this.searchString) {
                    this.searchForSoft()
                } else {
                    this.obtainSoft()
                }
            });
    }

    private obtainSoft() {
        this.softwareService.getSoftware(3).subscribe(
            result => this.softList = result
        )
    }
    private searchForSoft() {
        this.softwareService.getSoftwareSearch(this.searchString).subscribe(
            result => this.softList = result
        )
    }
}

