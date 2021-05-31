import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '@app/services/error-handler.service'
import { RecipientsService } from './services/recipients.service'


@Component({
    selector: 'app-recipients',
    templateUrl: './recipients.component.html',
    styleUrls: ['./recipients.component.scss'],
    providers: [MessageService]
})
export class RecipientsComponent implements OnInit {
    loading = false
    submitButtonLabel = 'Agregar'
    banks: any
    accountTypes: any

    form = new FormGroup({
        name: new FormControl('', [
        ]),
        rut: new FormControl('', [
        ]),
        email: new FormControl('', [
        ]),
        phone: new FormControl('', [
        ]),
        destinationBank: new FormControl('', [
        ]),
        accountType: new FormControl('', [
        ]),
        accountNumber: new FormControl('', [
        ])
    });

    constructor(
        private messageService: MessageService,
        private recipientsService: RecipientsService,
		private errorHandlerService: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.recipientsService.getBanks().subscribe({
            next: data =>{
                this.banks = data.banks
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })
        this.recipientsService.getAccountTypes().subscribe({
            next: data =>{
                this.accountTypes = data
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })

    }

    submit(): void {
        console.log('sdsadsad',  this.form.value);
        
        if(!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;

        this.recipientsService.saveRecipient(
            {
                name: this.form.value.name,
                rut: this.form.value.rut,
                email: this.form.value.email,
                phone: this.form.value.phone,
                bank: this.form.value.destinationBank.name,
                accountType: this.form.value.accountType.name,
                accountNumber: this.form.value.accountNumber
            }
        ).subscribe({
            next: data =>{
                this.messageService.add({severity: 'success', summary: '¡Éxito!', detail: 'Se ha añadido el destinatario.'});
                console.log('success', data);
                this.form.reset()
                this.loading = false;
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })
    }

}
