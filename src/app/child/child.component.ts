import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

 @Input () employees : any;

Message :string = 'passed value to parant';
cars = ["Saab", "Volvo", "BMW","BMW",'Saab'];
@Output() msEvent = new EventEmitter();

  constructor() { }

  ngAfterViewInit() {

    this.msEvent.emit(this.cars);
  }

}
