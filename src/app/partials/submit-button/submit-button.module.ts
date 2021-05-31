import { NgModule } from '@angular/core';
import { SubmitButtonComponent } from './submit-button.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SubmitButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SubmitButtonComponent]
})
export class SubmitButtonModule { }
