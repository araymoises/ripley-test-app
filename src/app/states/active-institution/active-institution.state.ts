import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddActiveInstitution, RemoveActiveInstitution } from './active-institution.actions'
import { Injectable } from '@angular/core'

export class ActiveInstitutionStateModel {
    activeInstitution: any
}

@State<ActiveInstitutionStateModel>({
    name: 'activeInstitution',
    defaults: {
        activeInstitution: []
    }
})

@Injectable()
export class ActiveInstitutionState {
    @Selector()
    static getActiveInstitution(state: ActiveInstitutionStateModel){
        return state.activeInstitution
    }

    @Action(AddActiveInstitution)
    add({ getState, patchState }: StateContext<ActiveInstitutionStateModel>, { payload }: AddActiveInstitution){
        const state = getState()
        patchState({
            activeInstitution: payload
        })
    }

    @Action(RemoveActiveInstitution)
    remove({ getState, patchState }: StateContext<ActiveInstitutionStateModel>, { }: RemoveActiveInstitution){
        const state = getState()
        patchState({
            activeInstitution: []
        })
    }
}