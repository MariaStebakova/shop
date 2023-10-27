import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
}]
})
export class EmailValidatorDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === 'qwerty@mail.com') {
      return {
        emailValidator: true
      }
    }

    return null;
  }

}
