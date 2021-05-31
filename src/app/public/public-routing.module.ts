import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PublicComponent } from './public.component'
import { StyleGuideComponent } from './style-guide/style-guide.component'

import { RecipientsComponent } from './recipients/recipients.component'
import { TransactionsComponent } from './transactions/transactions.component'
import { HistoryComponent } from './history/history.component'

const routes: Routes = [
	{ path: '', component: PublicComponent },
	{ path: 'style', component: StyleGuideComponent },
	{ path: 'recipients', component: RecipientsComponent},
	{ path: 'transactions', component: TransactionsComponent},
	{ path: 'history', component: HistoryComponent},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
