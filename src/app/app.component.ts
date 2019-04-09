import { Component, AfterViewInit, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  employees: any[];
  cars: any[];
  person: string = 'Jain';

  //to access child component -proto-
  @ViewChild('childComp') childComp: ChildComponent;

  constructor() { }

  async ngOnInit() {
    this.employees = ["jay", "saam", "ginu", "neo", 'neo', 'kisho'];

  }

//accessing child component method  **** @ViewChild
ngAfterContentChecked() {
    this.childComp.run(this.person);
  }

  //receiving method **** receive values from child to parent *** @Output
  rece($event) {
    this.cars = $event;
  }
}
