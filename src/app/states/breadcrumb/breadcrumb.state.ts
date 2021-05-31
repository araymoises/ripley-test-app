import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddBreadcrumb } from './breadcrumb.actions'
import { Injectable } from '@angular/core'

export class BreadcrumbStateModel {
    breadcrumb: any
}

@State<BreadcrumbStateModel>({
    name: 'breadcrumb',
    defaults: {
        breadcrumb: []
    }
})

@Injectable()
export class BreadcrumbState {
    @Selector()
    static getBreadcrumb(state: BreadcrumbStateModel){
        return state.breadcrumb
    }

    @Action(AddBreadcrumb)
    add({ getState, patchState }: StateContext<BreadcrumbStateModel>, { payload }: AddBreadcrumb){
        const state = getState()
        patchState({
            breadcrumb: payload
        })
    }
}