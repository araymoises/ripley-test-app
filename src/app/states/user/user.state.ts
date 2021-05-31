import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddLoggedUser, RemoveLoggedUser } from './user.actions'
import { Injectable } from '@angular/core'

export class UserStateModel {
	loggedUser: any
}

@State<UserStateModel>({
	name: 'users',
	defaults: {
		loggedUser: {}
	}
})

@Injectable()
export class UserState {
	@Selector()
	static getLoggedUser(state: UserStateModel){
		return state.loggedUser
	}

	@Action(AddLoggedUser)
	add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddLoggedUser){
		const state = getState()
		patchState({
			loggedUser: payload
		})
	}

	@Action(RemoveLoggedUser)
	remove({ patchState }: StateContext<UserStateModel>, { }: RemoveLoggedUser){
		patchState({
			loggedUser: {}
		})
	}
}