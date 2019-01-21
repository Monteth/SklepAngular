import {Component, OnInit} from '@angular/core'
import {Patron, PatronService, PupilBean} from '../service/data/patron.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    private acc: Patron
    public pupils: PupilBean[]

    constructor(
        private router: Router,
        private patronService: PatronService
    ) {
    }

    ngOnInit() {
        this.obtainPatron()
    }

    private obtainRelatedPupils() {
        this.patronService.getPupils(this.acc.idPatron).subscribe(
            result => this.savePupils(result)
        )
    }

    private obtainPatron() {
        this.patronService.getPatron(sessionStorage.getItem('email')).subscribe(
            result => this.saveAcc(result)
        )
    }

    private saveAcc(result: Patron) {
        this.acc = result
        console.log(this.acc)
        console.log(this.acc.idPatron)
        this.obtainRelatedPupils()
    }

    private savePupils(result: PupilBean[]) {
        this.pupils = result
        console.log(this.pupils)
    }

    private selectPupil(pupil: PupilBean) {
        sessionStorage.setItem('pupilname', (pupil.firstName + ' ' + pupil.lastName))
        this.router.navigate(['restrictions']);
    }
}
