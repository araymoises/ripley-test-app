import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddGlobalError } from './global-error.actions'
import { Injectable } from '@angular/core'

export class GlobalErrorStateModel {
	isVisibleGlobalError: boolean
}

@State<GlobalErrorStateModel>({
	name: 'globalError',
	defaults: {
		isVisibleGlobalError: false
	}
})

@Injectable()
export class GlobalErrorState {
	@Selector()
	static isVisibleGlobalError(state: GlobalErrorStateModel){
		return state.isVisibleGlobalError
	}

	@Action(AddGlobalError)
	add({ getState, patchState }: StateContext<GlobalErrorStateModel>, { payload }: AddGlobalError){
		const state = getState()
		patchState({
			isVisibleGlobalError: payload
		})
	}
}