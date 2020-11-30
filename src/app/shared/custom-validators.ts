import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    // Comprueba si es un número
    static isNumber(allowEmpty?: boolean): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const regexp = /^[0-9]+$/;

            // Verifico que es un número
            let number = regexp.test(control.value);

            // A ver si permito nulls o vacíos
            if (allowEmpty && (control.value === '' || control.value === null)) {
                number = true;
            }

            return number ? null : {isNumber: {value: control.value}};
        };
    }

}
