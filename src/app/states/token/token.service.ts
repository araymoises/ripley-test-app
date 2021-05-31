import { Injectable } from '@angular/core'
import { Store } from '@ngxs/store'
import { RemoveTokenUser } from '@states/token/token.actions'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
		private store: Store
  ) { }

  removeToken() {
    this.store.dispatch(new RemoveTokenUser())
  }
}
