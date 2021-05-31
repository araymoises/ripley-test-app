import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment as env } from '@environments/environment'

@Injectable({
	providedIn: 'root'
})
export class ContinuousImprovementFeedbacksService {

	constructor(private http: HttpClient) { }

	createFeedback(obj: any): Observable<any> {
		return this.http.post(env.url.apiEndpoint + 'continuousImprovementFeedbacks/', obj)
	}

	getFeedback(): Observable<any> {
		return this.http.get(env.url.apiEndpoint + 'continuousImprovementFeedbacks/')
	}

}
