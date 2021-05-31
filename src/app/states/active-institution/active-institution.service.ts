import { Injectable } from '@angular/core'
import { AddActiveInstitution } from '@states/active-institution/active-institution.actions'
import { Store } from '@ngxs/store'

@Injectable({
  providedIn: 'root'
})
export class ActiveInstitutionService {

  constructor(
    private store: Store
  ) { }

  addActiveInstitution(activeInstitution: any){
    this.store.dispatch(new AddActiveInstitution(activeInstitution))
  }
}
