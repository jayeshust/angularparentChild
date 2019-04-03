import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

 // @Input () message : string;

Message :string = 'hello child';
@Output() msEvent = new EventEmitter();

  constructor() { }

  send() {

    this.msEvent.emit(this.Message);
  }

}
