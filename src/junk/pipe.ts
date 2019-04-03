
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
name :'gend'
})

export class pipe implements PipeTransform{

transform(value:string,gender:string): string {
if(gender == 'male'){
    return 'Mr.'+value;
}
else{
    return 'Mis.'+value;
}
}
}