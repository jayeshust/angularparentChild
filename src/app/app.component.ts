import { Component, AfterViewInit, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ConnectionService } from 'ng-connection-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  employees: any[];
  cars: any[];
  person: string = 'Jain';

  directions:string;
  //to access child component -proto-
  @ViewChild('childComp') childComp: ChildComponent;

  title = 'connectionDetector';
  status = 'ONLINE'; //initializing as online by default
  isConnected = true;

  constructor(private connectionService:ConnectionService){
   
  }

  async ngOnInit() {
    console.log(">>>>>>");
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if(this.isConnected){
        this.status = "ONLINE";
      } else {
        this.status = "OFFLINE"
      }
      alert(this.status);
    });
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