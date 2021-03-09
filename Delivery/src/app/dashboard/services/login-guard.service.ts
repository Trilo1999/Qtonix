import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private router :Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      if (isLoggedIn) {
           this.router.navigateByUrl('/dashboard/home');
           return false;
          }
      return true;
    }


}
