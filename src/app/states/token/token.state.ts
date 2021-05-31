import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddTokenUser, RemoveTokenUser } from './token.actions'
import { Injectable } from '@angular/core'

export class TokenStateModel {
    tokenUser: any
}

@State<TokenStateModel>({
    name: 'tokens',
    defaults: {
        tokenUser: {}
    }
})

@Injectable()
export class TokenState {
    @Selector()
    static getToken(state: TokenStateModel){
        return state.tokenUser
    }

    @Action(AddTokenUser)
    add({ getState, patchState }: StateContext<TokenStateModel>, { payload }: AddTokenUser){
        const state = getState()
        patchState({
            tokenUser: payload
        })
    }

    @Action(RemoveTokenUser)
    remove({ patchState }: StateContext<TokenStateModel>, { }: RemoveTokenUser){
        patchState({
            tokenUser: {}
        })
    }
}