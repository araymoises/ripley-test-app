import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PeopleValidators {
    static personName(): ValidatorFn  {
        return (control: AbstractControl): {[key: string]: any} | null => {
            if(control.value === '') { return null; }
            const result = /\b([A-ZÁÉÍÓÚÑ]{0,1}[a-záéíóúñ]+[ ]{0,1}){2,}/.test(control.value);
            console.log(result);
            return !result ? {personName: {value: control.value}} : null;
        };
	}
	static rut(): ValidatorFn  {
        return (control: AbstractControl): {[key: string]: any} | null => {
            if(control.value === '') { return null; }
            const result = /\b([A-ZÁÉÍÓÚÑ]{0,1}[a-záéíóúñ]+[ ]{0,1}){2,}/.test(control.value);
            console.log(result);
            return !result ? {personName: {value: control.value}} : null;
        };
	}
}