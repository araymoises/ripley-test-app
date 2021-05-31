import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddLoadingComponent } from './loading-component.actions'
import { Injectable } from '@angular/core'

export class BreadcrumbStateModel {
    isLoading: boolean
}

@State<BreadcrumbStateModel>({
    name: 'loadingComponent',
    defaults: {
        isLoading: false
    }
})

@Injectable()
export class LoadingComponentState {
    @Selector()
    static isLoading(state: BreadcrumbStateModel){
        return state.isLoading
    }

    @Action(AddLoadingComponent)
    add({ getState, patchState }: StateContext<BreadcrumbStateModel>, { payload }: AddLoadingComponent){
        const state = getState()
        patchState({
            isLoading: payload
        })
    }
}