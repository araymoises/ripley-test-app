import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './helpers/auth.guard'

const routes: Routes = [
	{ path: '', redirectTo: 'public/history', pathMatch: 'full' },
	{ path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
	{ path: 'loading', loadChildren: () => import('./partials/loading/loading.module').then(m => m.LoadingModule) },
	{ path: '**', loadChildren: () => import('@app/partials/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
]

@NgModule({
	imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
