import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddNotifications, LoadNotifications } from './notifications.actions'
import { Injectable } from '@angular/core'

export class NotificationsStateModel {
    notifications: any
    loading: any
}

@State<NotificationsStateModel>({
    name: 'notifications',
    defaults: {
        notifications: [],
        loading: false
    }
})

@Injectable()
export class NotificationsState {
    @Selector()
    static getNotifications(state: NotificationsStateModel){
        return state.notifications
    }

    @Action(AddNotifications)
    add({ getState, patchState }: StateContext<NotificationsStateModel>, { payload }: AddNotifications){
        const state = getState()
        patchState({
            notifications: payload
        })
    }

    @Action(LoadNotifications)
    load({ getState, patchState }: StateContext<NotificationsStateModel>, { }: LoadNotifications){
        const state = getState()
        patchState({
            notifications: NotificationsState.getNotifications
        })
    }
}