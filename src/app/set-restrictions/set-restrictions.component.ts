import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {PupilBean} from '../service/data/patron.service'
import {forEach} from '@angular/router/src/utils/collection'

@Component({
    selector: 'app-set-restrictions',
    templateUrl: './set-restrictions.component.html',
    styleUrls: ['./set-restrictions.component.css']
})
export class SetRestrictionsComponent implements OnInit {
    public pupilName: String
    public selectedPegi: Pegi
    public isDataSaved = false;
    public pegis: Pegi[] = [
        new Pegi(1, 'PEGI 3'),
        new Pegi(7, 'PEGI 7'),
        new Pegi(12, 'PEGI 12'),
        new Pegi(16, 'PEGI 16'),
        new Pegi(18, 'PEGI 18')]

    public limitations: Limitation[] = [
        new Limitation(1, 'Wulgarny język', false),
        new Limitation(2, 'Dyskryminacja', false),
        new Limitation(3, 'Narkotyki', true),
        new Limitation(4, 'Strach', false),
        new Limitation(5, 'Hazard', false),
        new Limitation(6, 'Seks', false),
        new Limitation(7, 'Przemoc', false),
        new Limitation(8, 'Mikropłatności', false)]

    constructor(
        private router: Router
    ) {
        this.isDataSaved = false;
    }

    ngOnInit() {
        // @ts-ignore
        this.pupilName = sessionStorage.getItem('pupilname')
        console.log(this.pupilName)
    }

    public isEven(l: Limitation) {
        return l.id % 2 === 0
    }

    public isOdd(l: Limitation) {
        return l.id % 2 === 1
    }

    public selectLimit(id: number) {
        this.limitations.forEach(function (limit) {
            if (limit.id === id) {
                limit.selected = !limit.selected
            }
        })
    }

    public saveData() {
        this.isDataSaved = true;
    }

}

export class Pegi {
    constructor(
        public number: number,
        public name: string
    ) {
    }
}

export class Limitation {
    constructor(
        public id: number,
        public name: string,
        public selected: boolean
    ) {
    }
}
