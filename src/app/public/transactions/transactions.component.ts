import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '@app/services/error-handler.service'
import { TransactionsService} from './services/transactions.service'


@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
    providers: [MessageService]
})
export class TransactionsComponent implements OnInit {
    loading = false
    submitButtonLabel = 'Transferir'
    recipients: any
    accountTypes: any

    form = new FormGroup({
        recipient: new FormControl('', []),
        amount: new FormControl('', [])
    });

    constructor(
        private messageService: MessageService,
        private transactionsService: TransactionsService,
		private errorHandlerService: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.transactionsService.getRecipients().subscribe({
            next: data =>{
                this.recipients = data
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })
    }

    submit(): void {
        console.log('sdsadsad',  this.form.value)

        if(!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;

        this.transactionsService.saveTransaction(
            {
                recipient: this.form.value.recipient._id,
                amount: this.form.value.amount,
            }
        ).subscribe({
            next: data =>{
                this.messageService.add({severity: 'success', summary: '¡Éxito!', detail: 'Se ha realizado la transferencia correctamente.'})
                console.log('success', data);
                this.loading = false;
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })
    }

}
