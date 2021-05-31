import { Injectable } from '@angular/core'
import { AddNotifications, LoadNotifications } from '@states/notifications/notifications.actions'
import { Store } from '@ngxs/store'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private store: Store
  ) { }

  addNotifications(notifications: any){
    this.store.dispatch(new AddNotifications(notifications))
  }

  loadNotifications(){
    this.store.dispatch(new LoadNotifications())
  }
}
