import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Select, Store } from '@ngxs/store'
import { TokenState } from '@app/states/token/token.state'
import { LogoutService } from '@app/services/logout.service'

@Injectable()
export class TokenUserInterceptor implements HttpInterceptor {

	@Select(TokenState.getToken) TokenUser: Observable<any>
	token: string
	actualToken: string
	
	constructor(
		private logoutService: LogoutService,
		private store: Store,
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		this.token = this.store.selectSnapshot<any>((state) => state.tokens.tokenUser)
		this.actualToken = localStorage.getItem('auth-token')

		if (this.token !== this.actualToken) this.logoutService.logout()
		 
		// this.TokenUser.subscribe({
		// 	next: token => {
		// 		this.token = localStorage.getItem('auth-token')
		// 	}
		// })

		
		if (this.isEmpty(this.token)) {
			return next.handle(request)
		}

		const headers = request.clone({
			headers: request.headers.set('auth-token', localStorage.getItem('auth-token'))
		})

		return next.handle(headers)
	}

	isEmpty(obj): Boolean {
		for(var key in obj) {
			if (obj.hasOwnProperty(key)) {
				return false
			}
		}
		return true
	}
}
