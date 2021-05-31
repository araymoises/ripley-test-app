import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '@environments/environment'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class PdfService {

	constructor(private http: HttpClient) { }

	progressUpdate(url: string): void {
		this.http.get(env.url.apiEndpoint + url).subscribe((data) => {
			// [REFACTOR] Quizas sea necesario hacer este servicio, pero aun no sé muy bien como hacerlo.
			// const blob = new Blob([data], {type: 'application/pdf'})
			// const downloadURL = window.URL.createObjectURL(data)
			// const link = document.createElement('a')
			// link.href = downloadURL
			// link.download = "help.pdf"
			// link.click()
		})
	}

}
