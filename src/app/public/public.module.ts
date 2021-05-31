import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PublicRoutingModule } from './public-routing.module'
import { PublicComponent } from './public.component'

import { NgxsModule } from '@ngxs/store'

import { UserState } from '@states/user/user.state'

import { TransactionsModule } from './transactions/transactions.module'
import { RecipientsModule } from './recipients/recipients.module'
import { HistoryModule } from './history/history.module'

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    NgxsModule.forFeature([UserState]),
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    TransactionsModule,
    RecipientsModule,
    HistoryModule,
  ]
})
export class PublicModule { }
