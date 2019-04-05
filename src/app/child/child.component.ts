import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ViewChild('tableBody') tableBody: ElementRef;
  @Input() employees: any;

  Message: string = 'passed value to parant';
  cars = ["saab", "volvo", "bMW", "bMW", 'saab','gygyg'];

  @Output() msEvent = new EventEmitter();

  constructor() { }

  send() {
    this.msEvent.emit(this.cars);
  }

  // function animal(name){
  //   this.name = name;
  //   }
    
  //   animal.prototype.sleep = function(){
  //   console.log(this.name+' zzz');
  //   }
    
  //   function dog(name){
  //   this.name = name;
  //   }
    
  //   dog.prototype = Object.create(animal.prototype);
    
  //   dog.prototype.bark = function(){
  //   console.log(this.name+ '...grrrr');
  //   }
    
    
  //   var d = new dog('raju');
    
    
    
  //   d.bark();
  //   d.sleep();
    
  //   --------------------
    
    
  //   class animal{
  //   constructor(name){
  //   this.name = name;
  //   }
    
  //   sleep(){
  //   console.log(this.name+' zzz');
  //   }
  //   }
    
  //   class dog extends animal{
  //   constructor(name){
  //   super(name);
  //   }
  //   bark(){
  //   console.log(this.name+' grrrr');
  //   }
  //   }
    
  //   var d = new dog('raju');
  //   d.bark();
  //   d.sleep();
 
}
