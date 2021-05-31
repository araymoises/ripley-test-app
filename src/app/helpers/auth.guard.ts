import { Injectable } from '@angular/core'
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router'
import { Observable } from 'rxjs'

import { UserState } from '@app/states/user/user.state'
import { Select } from '@ngxs/store'
import { Confirmation } from 'primeng'

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {

@Select(UserState.getLoggedUser) loggedUser: Observable<any>
currentUser: any

constructor(
	private router: Router,
) { }

canActivate(
	next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	// console.log('this.router.url', state.url)

	this.loggedUser.subscribe({
	next: data => {
		this.currentUser = data
	}
	})
	const url =  state.url.split('?')[0]
	if (url === '/public/login' || url === '/public/signup') {
		if (this.currentUser._id) {
			this.router.navigate(['users'])
		}
		return true
		// not logged in so redirect to login page with the return url
	} else {
		if (this.currentUser._id) {
			return true
		} else {
			this.router.navigate(['public', 'login'])
			return false
		}
	}
}
}
