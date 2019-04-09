import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() employees: any;//recieve from parent
  @Output() msEvent = new EventEmitter();//pass to parent
  person: string;

  cars = ["saab", "volvo", "bmw", "bmw", 'saab', 'camry'];
  constructor() { }

  //method to pass data to parent @output
  send() {
    this.msEvent.emit(this.cars);
  }

  run(who) {
    this.person = who;
  }


}
