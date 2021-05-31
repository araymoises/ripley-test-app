import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddUserAvatar, RemoveUserAvatar } from './user-avatar.actions'
import { Injectable } from '@angular/core'
import { environment as env } from '@environments/environment'

export class UserAvatarStateModel {
    userAvatar: any
}

@State<UserAvatarStateModel>({
    name: 'userAvatar',
    defaults: {
        userAvatar: env.config.defaultUserAvatar
    }
})

@Injectable()
export class UserAvatarState {
    @Selector()
    static getUserAvatar(state: UserAvatarStateModel){
        return state.userAvatar || env.config.defaultUserAvatar
    }

    @Action(AddUserAvatar)
    add({ getState, patchState }: StateContext<UserAvatarStateModel>, { payload }: AddUserAvatar){
        const state = getState()
        patchState({
            userAvatar: payload
        })
    }

    @Action(RemoveUserAvatar)
    remove({ getState, patchState }: StateContext<UserAvatarStateModel>, { }: RemoveUserAvatar){
        const state = getState()
        patchState({
            userAvatar: ''
        })
    }
}