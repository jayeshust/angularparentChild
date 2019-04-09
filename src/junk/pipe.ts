
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'flitr'
})
export class pipe implements PipeTransform {

    transform(arr) {

        var tmp = [];
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (tmp.indexOf(arr[i]) == -1) {
                    tmp.push(arr[i]);
                }
            }

            return tmp;

        }
    }


}