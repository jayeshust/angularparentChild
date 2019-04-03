
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
name :'gend'
})

export class pipe implements PipeTransform{

// transform(value:string,gender:string): string {
// if(gender == 'male'){
//     return 'Mr.'+value;
// }
// else{
//     return 'Mis.'+value;
// }
// }

transform(arr){
console.log('-pipe----'+JSON.stringify(arr))
var tmp = [];
for(var i = 0; i < arr.length; i++){
    if(tmp.indexOf(arr[i]) == -1){
    tmp.push(arr[i]);
    }
}
console.log('-unique array--'+JSON.stringify(tmp))
return tmp;
  
      
   // return uniqueArray;
  }
}