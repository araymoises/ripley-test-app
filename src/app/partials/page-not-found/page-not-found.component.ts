import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

	status = Math.floor(Math.random() * 3)

	constructor() {  }

	ngOnInit(): void {

	}

}
