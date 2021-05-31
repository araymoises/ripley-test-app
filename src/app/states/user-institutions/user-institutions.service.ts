import { Injectable } from '@angular/core'
import { AddUserInstitutions } from './user-institutions.actions'
import { Store } from '@ngxs/store'
import { UserInstitutionsState } from '@app/states/user-institutions/user-institutions.state'
import { Observable } from 'rxjs'
import { Select } from '@ngxs/store'
import { first } from 'rxjs/operators'
import { ActiveInstitutionState } from '../active-institution/active-institution.state'

@Injectable({
	providedIn: 'root'
})
export class UserInstitutionsService {

	@Select(UserInstitutionsState.getUserInstitutions) userInstitutions: Observable<any>
	@Select(ActiveInstitutionState.getActiveInstitution) activeInstitution$: Observable<any>

	constructor(
		private store: Store
	) {
		this.activeInstitution$.subscribe(() => {
			console.log('hey, detecté un cambio')
		})
	}

	addUserInstitutions(userInstitutions: any): void {
		this.store.dispatch(new AddUserInstitutions(userInstitutions))
	}

	async getUserInstitutionsById(id: string): Promise<any> {
		let userInstitutions: any
		await this.userInstitutions.pipe(first()).toPromise().then(e => userInstitutions = e)
		let result: any
		userInstitutions.forEach(userInstitution => {
			if (userInstitution._id === id) {
				result = userInstitution
			}
		})
		return result
	}
}
