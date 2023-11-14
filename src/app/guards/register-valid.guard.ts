import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {RegisterService} from "../services/register.service";
import {pathOr} from "ramda";

@Injectable({
  providedIn: 'root'
})
export class RegisterValidGuard implements CanActivate {
  constructor(private registerService: RegisterService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const validForm = pathOr(false, ['userData', 'register', 'valid'], this.registerService)
    console.log('RegisterValidGuard', pathOr(false, ['userData', 'register', 'valid'], this.registerService));
    if (validForm) {
      return true
    }
    return this.router.navigate(['/register']);
  }

}
