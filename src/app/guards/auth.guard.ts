
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean {    
    return Observable.of(this.verificarAcesso());
  }

  canLoad(
    route: Route
  ): Observable<boolean>|Promise<boolean>|boolean {
    return Observable.of(this.verificarAcesso());
  }

  private verificarAcesso() {
    if (this.authService.usuarioJaAutenticado()) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }

  logout() {
    this.authService.logout();
  }

}
