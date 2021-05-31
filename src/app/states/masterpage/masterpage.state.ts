import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddMasterpageType, RemoveMasterpageType } from './masterpage.actions'
import { Injectable } from '@angular/core'

export class MasterpageStateModel {
    masterpageType: any
}

@State<MasterpageStateModel>({
    name: 'masterpages',
    defaults: {
        masterpageType: ''
    }
})

@Injectable()
export class MasterpageState {
    @Selector()
    static getMasterpageType(state: MasterpageStateModel){
        return state.masterpageType
    }

    @Action(AddMasterpageType)
    add({ getState, patchState }: StateContext<MasterpageStateModel>, { payload }: AddMasterpageType){
        const state = getState()
        patchState({
            masterpageType: payload
        })
    }

    @Action(RemoveMasterpageType)
    remove({ getState, patchState }: StateContext<MasterpageStateModel>, { }: RemoveMasterpageType){
        const state = getState()
        patchState({
            masterpageType: ''
        })
    }
}