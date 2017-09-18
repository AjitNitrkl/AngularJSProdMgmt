import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterarray'
})
export class FilterarrayPipe implements PipeTransform {

  transform(value, args) {
    if(!args[0]){
      return value;
    }else if (value){
     return value.filterarray( item=>{
       for (let key in item){
         if((typeof item[key] === 'string' || item[key] instanceof String) &&
              (item[key].indexof(args[0])!== -1 )){
         return true;
       }
       }
     });
    }
   }
}
