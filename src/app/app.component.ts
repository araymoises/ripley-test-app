import { Component } from '@angular/core'
import { MessageService } from 'primeng/api'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Ripley'
	constructor(
		private messageService: MessageService,
	) {	}
}
