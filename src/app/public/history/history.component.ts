import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '@app/services/error-handler.service'
import { HistoryService } from './services/history.service'


@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
    providers: [MessageService]
})
export class HistoryComponent implements OnInit {
    loading = false
    submitButtonLabel = 'Agregar'
    transactions: any
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
        private historyService: HistoryService,
		private errorHandlerService: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.historyService.getTransactions().subscribe({
            next: data =>{
                this.transactions = data
                console.log('super log', this.transactions);
                
            },
            error: error =>{
                this.errorHandlerService.format(error)
                this.loading = false;
            }
        })
    }

    submit(): void {

    }

}
