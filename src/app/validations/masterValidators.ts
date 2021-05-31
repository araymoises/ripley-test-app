import { AbstractControl, ValidatorFn } from '@angular/forms'

export class MasterValidators {
	static matching(matchValue: any): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} | null => {
			const result = control.value !== matchValue
			return result ? {matching: {value: control.value}} : null
		}
	}
	static personName(): ValidatorFn  {
		return (control: AbstractControl): {[key: string]: any} | null => {
			if(control.value === '') { return null }
			const result = /\b([A-ZÁÉÍÓÚÑ]{0,1}[a-záéíóúñ]+[ ]{0,1}){2,}/.test(control.value)
			console.log(result)
			return !result ? {personName: {value: control.value}} : null
		}
	}
	static website(): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} | null => {
			if(control.value === '') { return null }
			const result = /\b(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(control.value)
			console.log(result);
			return !result ? {website: {value: control.value}} : null
		}
	}
}
