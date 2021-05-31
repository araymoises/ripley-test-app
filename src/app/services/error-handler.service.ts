import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import serverCodes from '@assets/json/serverCodes.json'
import { MessageService } from 'primeng'
import { LogoutService } from '@app/services/logout.service'
import { GlobalErrorService } from '@app/states/global-error/global-error.service'

@Injectable({
  	providedIn: 'root'
})
export class ErrorHandlerService {

	isLogout = false

	constructor(
		private logoutService: LogoutService,
		private messageService: MessageService,
		private router: Router,
		private globalErrorService: GlobalErrorService
	) { }

	format(error: any, path: string = ''): this {
		console.error(path, error)

		const _error = error.error
		const res: Array<Object> = []

		if (_error.status === 'fail') {
			if (error.status === 422) {
				this.messageService.addAll([{severity: 'error', summary: 'Error', detail: 'Error con los datos ingresados.'}])
				return this
			}
			
			for (const prop in _error.data) {
				if (prop === 'miscellaneous') {
					const _prop = prop === 'miscellaneous' ? '' : prop + ': '
					res.push({severity: 'error', summary: 'Error', detail: _prop + _error.data[prop]})
				}
			}
			this.messageService.addAll(res)
			return this
		}
		
		if (_error.status === 'error'){
			if (error.status === 401) {
				this.logoutService.logout()
				return this
			}
			if (_error.code === serverCodes.accessDenied) {
				if (!this.isLogout) {
					res.push({severity: 'error', summary: 'Error', detail: 'Sesión caducada.'})
				}
				this.messageService.addAll(res)
				this.logoutService.logout()
				this.isLogout = true
			} else{
				res.push({severity: 'error', summary: 'Error', detail: 'Lo sentimos, ocurrió un error inesperado.'})
				this.messageService.addAll(res)
			}
			return this
		}

		return this
	}

	isGlobal(): this {
		this.globalErrorService.show()
		return this
	}
}
