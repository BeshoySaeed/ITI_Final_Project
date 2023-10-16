import { AbstractControl,FormGroup,ValidationErrors,ValidatorFn } from '@angular/forms';

export function checkpass(value: string, matchingvalue: string){
    return (formGroup: FormGroup) => {
        const pass = formGroup.controls[value];
        const confpass = formGroup.controls[matchingvalue];
     
        if (pass.value !== confpass.value) {
            confpass.setErrors({ checkpass: true });
        } else {
            confpass.setErrors(null);
        }
    }
}