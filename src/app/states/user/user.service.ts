import { Injectable } from '@angular/core'
import { AddLoggedUser } from './user.actions'
import { Store } from '@ngxs/store'

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private store: Store
	) { }

	addLoggedUser(user: any): void{
		this.store.dispatch(new AddLoggedUser(user))
	}

	getLoggedUser(): any {
		return this.store.selectSnapshot<any>((state) => state.users.loggedUser)
	}

	isLoggedUser(id: string): boolean {
		const isLoggedUser = this.getLoggedUser()
		return isLoggedUser._id === id ? true : false
	}

	getUserInstitutionPrivileges(): Array<any> {
		const institutionId = this.store.selectSnapshot<any>((state) => state.activeInstitution.activeInstitution)._id
		const user = this.getLoggedUser()

		let userPrivileges = []
		user.collaborators
			.filter(collaborator => collaborator.institution === institutionId)[0]
			.institutionRoles.map(institutionRole => {
				return institutionRole.institutionPrivileges.map(institutionPrivilege => {
					userPrivileges.push(institutionPrivilege.code)
				})
			})

		userPrivileges = userPrivileges.filter((value, index, self) => {
			return self.indexOf(value) === index
		})

		return userPrivileges
	}

	hasInstitutionPrivilege(institutionalPrivilege): boolean {
		const userPrivileges = this.getUserInstitutionPrivileges()

		if (userPrivileges.includes(institutionalPrivilege)) { return true }
		return false
	}

	getUserGlobalPrivileges(): Array<any> {
		const user = this.getLoggedUser()

		let userPrivileges = []
		user.globalRoles.map(globalRole => {
				return globalRole.globalPrivileges.map(globalPrivileges => {
					userPrivileges.push(globalPrivileges.code)
				})
			})

		userPrivileges = userPrivileges.filter((value, index, self) => {
			return self.indexOf(value) === index
		})

		return userPrivileges
	}

	hasGlobalPrivilege(globalPrivilege): boolean {
		const userPrivileges = this.getUserGlobalPrivileges()

		if (userPrivileges.includes(globalPrivilege)) { return true }
		return false
	}
}
