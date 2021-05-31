import { Injectable } from '@angular/core'
import { AddLoadingComponent } from '@states/loading-component/loading-component.actions'
import { Store } from '@ngxs/store'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'

@Injectable({
	providedIn: 'root'
})
export class LoadingComponentService {

	id = 0
	routerId = 0

	constructor(
		router: Router,
		private store: Store
	) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.routerId = event.id
				this.setLoading(true)
			}
			if (event instanceof NavigationEnd) {
				this.setLoading(false)
			}
		})
	}

	setLoading(isLoading: boolean): void {
		this.store.dispatch(new AddLoadingComponent(isLoading))
	}

	startLoading(): number {
		this.setLoading(true)
		return ++this.id
	}

	endLoading(id: number): void {
		if (this.id === id) {
			this.setLoading(false)
		}
	}
}
