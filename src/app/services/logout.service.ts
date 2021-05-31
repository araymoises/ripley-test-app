import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { RemoveLoggedUser } from '@states/user/user.actions'
import { RemoveTokenUser } from '@states/token/token.actions'
import { RemoveMasterpageType } from '@states/masterpage/masterpage.actions'
import { RemoveUserAvatar } from '@states/user-avatar/user-avatar.actions'
import { RemoveActiveInstitution } from '@states/active-institution/active-institution.actions'
import { RemoveUserInstitutions } from '@states/user-institutions/user-institutions.actions'

@Injectable({
  	providedIn: 'root'
})
export class LogoutService {

	constructor(
		private http: HttpClient, 
		private router: Router,
		private store: Store
  	) { }

	logout() {
	}

	removeStates(): void {
		this.store.dispatch(new RemoveLoggedUser())
		this.store.dispatch(new RemoveTokenUser())
		this.store.dispatch(new RemoveMasterpageType())
		this.store.dispatch(new RemoveUserAvatar())
		this.store.dispatch(new RemoveActiveInstitution())
		this.store.dispatch(new RemoveUserInstitutions())
	}
}
