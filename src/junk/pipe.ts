
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'gend'
})

export class pipe implements PipeTransform {

    // transform(value:string,gender:string): string {
    // if(gender == 'male'){
    //     return 'Mr.'+value;
    // }
    // else{
    //     return 'Mis.'+value;
    // }
    // }

    // transform(arr) {

    //     var tmp = [];
    //     if (arr) {
    //         for (var i = 0; i < arr.length; i++) {
    //             if (tmp.indexOf(arr[i]) == -1) {
    //                 tmp.push(arr[i]);
    //             }
    //         }

    //         return tmp;

    //     }
    // }

    transform(arr) {

        if (arr) {
        var sortedArray = arr.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        console.log(sortedArray);
        return sortedArray;
    }}

}