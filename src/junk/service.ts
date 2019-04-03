import { Injectable } from '@angular/core';
import { Iemployee } from './interface';
import { HttpClient } from '@angular/common/http';

Injectable()
export class serve {

    results: any;
    constructor() {

    }

    getEmployee() {
        return [
            {
                name: 'abc', gender: 'male'
            },
            {
                name: 'def', gender: 'female'
            }
        ];
        // console.log('gvdghgwhgggw');
        // this.http.get('http://dummy.restapiexample.com/api/v1/employees').toPromise()
        //     .then((data: any) => {
              
        //         this.results = data.results;
        //     });

        // return this.results
    }
}

//http://dummy.restapiexample.com/api/v1/employees