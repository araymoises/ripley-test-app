import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideComponent } from './style-guide.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';

import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [
    NgxsModule.forFeature([]),
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    ChipsModule,
    AutoCompleteModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    PasswordModule,
    InputSwitchModule,
    HttpClientModule
  ]
})
export class StyleGuideModule { }
