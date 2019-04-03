import { Component } from '@angular/core';
import { Iemployee } from '../junk/interface';
import { serve } from '../junk/service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees:any[];
  cars: any[];
  message: string;

  constructor(private _empservice: serve) {

  }


  async ngOnInit() {
   // this.employees = await this._empservice.getEmployee();
    // console.log('>>' + JSON.stringify(this.employees))
    this.employees = ["Saab", "Volvo", "BMW", "BMW", 'Saab'];
  }

  rece($event) {
    this.cars = $event;
    console.log('<<' + this.cars)
  }

  //  https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2
}
