import { Injectable } from '@angular/core'
import { AddBreadcrumb } from '@states/breadcrumb/breadcrumb.actions'
import { Store } from '@ngxs/store'

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {

	constructor(
	private store: Store
	) { }

	addBreadcrumb(breadcrumb: any){
	this.store.dispatch(new AddBreadcrumb(breadcrumb))
	}
}
