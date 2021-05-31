import { Injectable } from '@angular/core'
import { AddGlobalError } from '@states/global-error/global-error.actions'
import { Store } from '@ngxs/store'
import { NavigationStart, Router } from '@angular/router'

@Injectable({
	providedIn: 'root'
})
export class GlobalErrorService {

	constructor(
		router: Router,
		private store: Store
	) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.hide()
			}
		})
	}


	show(): void {
		this.store.dispatch(new AddGlobalError(true))
	}

	hide(): void {
		this.store.dispatch(new AddGlobalError(false))
	}
}
