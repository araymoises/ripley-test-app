import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputTextModule, MessageModule, MessagesModule, ToastModule, DropdownModule } from 'primeng';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecipientsComponent } from './recipients.component';
import { SubmitButtonModule } from './../../partials/submit-button/submit-button.module'

import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [RecipientsComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		InputTextModule,
		ButtonModule,
		MessageModule,
		MessagesModule,
		RouterModule,
		SubmitButtonModule,
		ToastModule,
		DropdownModule
	]
})
export class RecipientsModule { }
