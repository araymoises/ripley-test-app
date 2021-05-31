import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddUserInstitutions, RemoveUserInstitutions } from './user-institutions.actions'
import { Injectable } from '@angular/core'

export class UserInstitutionsStateModel {
	userInstitutions: any
}

@State<UserInstitutionsStateModel>({
	name: 'userInstitutions',
	defaults: {
		userInstitutions: []
	}
})

@Injectable()
export class UserInstitutionsState {
	@Selector()
	static getUserInstitutions(state: UserInstitutionsStateModel){
		return state.userInstitutions
	}

	@Action(AddUserInstitutions)
	add({ getState, patchState }: StateContext<UserInstitutionsStateModel>, { payload }: AddUserInstitutions){
		const state = getState()
		patchState({
			userInstitutions: payload
		})
	}

	@Action(RemoveUserInstitutions)
	remove({ getState, patchState }: StateContext<UserInstitutionsStateModel>, { }: RemoveUserInstitutions){
		const state = getState()
		patchState({
			userInstitutions: []
		})
	}
}