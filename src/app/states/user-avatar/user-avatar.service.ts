import { Injectable } from '@angular/core'
import { AddUserAvatar } from '@states/user-avatar/user-avatar.actions'
import { Store } from '@ngxs/store'

@Injectable({
	providedIn: 'root'
})
export class UserAvatarService {
	constructor(
		private store: Store
	) { }

	addUserAvatar(userAvatar: any){
		this.store.dispatch(new AddUserAvatar(userAvatar))
	}
}
