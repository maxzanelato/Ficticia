
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return Observable.of(this.possuiPerfil());
    }

    canLoad(
        route: Route
    ): Observable<boolean>|Promise<boolean>|boolean {
        return Observable.of(this.possuiPerfil());
    }

    private possuiPerfil() {
        if(this.authService.possuiPerfil()) {
            return true;
        }
        return false;
    }
}
