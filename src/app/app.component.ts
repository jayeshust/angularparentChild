import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Iemployee } from '../junk/interface';
import { serve } from '../junk/service'
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  employees: any[];
  cars: any[];
  message: string;
  @ViewChild('childComp') childComp: ChildComponent;
  constructor(private _empservice: serve) {

  }


  async ngOnInit() {
    // this.employees = await this._empservice.getEmployee();
    // console.log('>>' + JSON.stringify(this.employees))
    this.employees = ["saab", "volvo", "bMW", "bMW", 'saab', 'gygyg'];
  }

  ngAfterViewInit() {
    console.log('>>>');
    console.log(this.childComp.tableBody);
  }

  rece($event) {
    this.cars = $event;
    console.log('<<' + this.cars)
  }

  //  https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2
}
