import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { InputTextModule } from 'primeng/inputtext'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { StyleGuideModule } from './public/style-guide/style-guide.module'

import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { environment as env } from '@environments/environment'
import { UserState } from '@states/user/user.state'
import { TokenState } from '@states/token/token.state'
import { MasterpageState } from '@states/masterpage/masterpage.state'
import { BreadcrumbState } from '@states/breadcrumb/breadcrumb.state'
import { NotificationsState } from '@states/notifications/notifications.state'
import { LoadingComponentState } from '@states/loading-component/loading-component.state'
import { GlobalErrorState } from '@states/global-error/global-error.state'
import { UserAvatarState } from '@states/user-avatar/user-avatar.state'
import { ActiveInstitutionState } from '@states/active-institution/active-institution.state'
import { UserInstitutionsState } from '@states/user-institutions/user-institutions.state'
import { TokenUserInterceptor } from '@app/helpers/userToken/token-user.interceptor'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MessageService } from 'primeng/api'
import { ToastModule } from 'primeng/toast'
import locale from '@angular/common/locales/es-CL'
registerLocaleData(locale, 'es-Cl')

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		NgxsModule.forRoot(
			[
				UserState,
				TokenState,
				MasterpageState,
				BreadcrumbState,
				NotificationsState,
				LoadingComponentState,
				GlobalErrorState,
				UserAvatarState,
				ActiveInstitutionState,
				UserInstitutionsState
			],
			{
				developmentMode: !env.production
			}
		),
		NgxsStoragePluginModule.forRoot({
			key: [
				UserState,
				TokenState,
				MasterpageState,
				UserAvatarState,
				ActiveInstitutionState,
				UserInstitutionsState
			]
		}),
		NgxsReduxDevtoolsPluginModule.forRoot({
			disabled: env.production
		}),
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		InputTextModule,
		BrowserAnimationsModule,
		FormsModule,
		StyleGuideModule,
		ToastModule,
	],
	bootstrap: [AppComponent],
	providers: [
	MessageService,
		{ provide: HTTP_INTERCEPTORS, useClass: TokenUserInterceptor, multi: true },
		{ provide: LOCALE_ID, useValue: 'es-Cl' }
	],
})
export class AppModule { }
