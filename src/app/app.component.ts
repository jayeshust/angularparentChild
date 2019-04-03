import { Component } from '@angular/core';
import { Iemployee } from '../junk/interface';
import { serve } from '../junk/service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Iemployee[];
  
  constructor(private _empservice: serve) {
    
  }


  async ngOnInit(){
    console.log('jkh');
    this.employees = await this._empservice.getEmployee();
    console.log('>>'+JSON.stringify(this.employees))
  }
}
