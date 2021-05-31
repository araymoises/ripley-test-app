import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule, InputTextModule, MessagesModule, ToastModule, DropdownModule } from 'primeng'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TransactionsComponent } from './transactions.component'
import { SubmitButtonModule } from '@app/partials/submit-button/submit-button.module'

import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    SubmitButtonModule,
    ToastModule,
    RouterModule,
    DropdownModule
  ]
})
export class TransactionsModule { }
