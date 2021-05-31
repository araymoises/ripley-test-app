import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputTextModule, MessageModule, MessagesModule, ToastModule, DropdownModule, TableModule } from 'primeng';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HistoryComponent } from './history.component';
import { SubmitButtonModule } from '../../partials/submit-button/submit-button.module'

import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HistoryComponent],
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
		DropdownModule,
		TableModule
	]
})
export class HistoryModule { }
