import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static startCase({ value }: AbstractControl): ValidationErrors | null {
        /**
         * Посмотрите такой шаблон
         * const pattern = /^\p{Lu}\p{Ll}+$/u;
         */
        const isStartCase = /^[A-Z]/.test(value);
        if (value !== '' && !isStartCase) {
            return { startCase: true }
        }

        return null;
    }
}
