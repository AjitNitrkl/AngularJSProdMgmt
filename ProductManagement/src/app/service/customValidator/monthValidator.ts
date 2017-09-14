import {AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

export function validateMonth(control: AbstractControl){
    if(control.value > 12){
        return Observable.of({ inValidMonth:true})
    }

    return Observable.of(null);
}