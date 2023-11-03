import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static startCase({ value }: AbstractControl): ValidationErrors | null {
        const isStartCase = /^\p{Lu}\p{Ll}+$/.test(value);
        if (value !== '' && !isStartCase) {
            return { startCase: true }
        }

        return null;
    }
}