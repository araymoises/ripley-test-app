import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '@environments/environment'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ActivityService {

	constructor(private http: HttpClient) { }

	progressUpdate(institutionId: string, activityId: string, obj: any): Observable<any> {
		return this.http.patch(env.url.apiEndpoint +
			`institutions/${institutionId}/activities/${activityId}/progress/update`, obj)
	}

}
