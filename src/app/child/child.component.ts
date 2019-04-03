import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() employees: any;

  Message: string = 'passed value to parant';
  cars = ["Saab", "Volvo", "BMW", "BMW", 'Saab'];

  @Output() msEvent = new EventEmitter();

  constructor() { }

  send() {
    this.msEvent.emit(this.cars);
  }

 
}
