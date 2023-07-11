import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "./Services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class showMenuGuard implements CanActivate {
  constructor(private authService:AuthService , private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthentication()
      .then((authenticate:boolean) => {
         if (authenticate) {
          return true
        } else {
          this.router.navigate(['/404'])
           return false
        }
      })
  }
}
