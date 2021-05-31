import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

	messageIndex = 0
	messages = [
		'En un segundo lo tenemos listo',
		'Nos está tomando mas tiempo del esperado',
		'Emm... ¿donde lo dejé?',
		'Lamento mucho la espera, seguiré buscando'
	]

	message: string = this.messages[this.messageIndex]

	constructor() { }

	ngOnInit(): void {
		this.updateMessage()
	}

	updateMessage(): void {
		setInterval(() => {
			this.messageIndex++
			this.message = this.messages[this.messageIndex % this.messages.length]
		}, 3000)
	}

}
