import { Injectable } from '@angular/core';
import { AddMasterpageType } from '@states/masterpage/masterpage.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class MasterpageService {

  constructor(
    private store: Store
  ) { }

  addMasterpageType(masterpageType: any){
    this.store.dispatch(new AddMasterpageType(masterpageType))
  }
}
