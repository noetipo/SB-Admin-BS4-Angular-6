import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    editField: string;
    personList: Array<any> = [
        {id: 1, name: 'demo1', age: 30, companyName: 'demo1', country: 'demo1', city: 'demo1'},
        {id: 2, name: 'demo1', age: 45, companyName: 'demo1', country: 'demo1', city: 'demo1'},
        {id: 3, name: 'demo1', age: 26, companyName: 'demo1', country: 'demo1', city: 'demo1'},
        {id: 4, name: 'demo1', age: 30, companyName: 'demo1', country: 'demo1', city: 'demo1'},
        {id: 5, name: 'demo1', age: 31, companyName: 'demo1', country: 'demo1', city: 'demo1'},
    ];

    awaitingPersonList: Array<any> = [
        {id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow'},
        {id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles'},
        {id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago'},
        {id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio'},
        {id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok'},
    ];

    updateList(id: number, property: string, event: any) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }

    remove(id: any) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }

    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }

    changeValue(id: number, property: string, event: any) {


        console.log(id, property, event);
        this.editField = event.target.textContent;
        console.log(this.editField );
    }
}
