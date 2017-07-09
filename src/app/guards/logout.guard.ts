
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../login/auth.service';

@Injectable()
export class LogoutGuard implements CanActivate, CanLoad {
    
    constructor(
        private authService: AuthService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        this.logout();

        return Observable.of(true);
    }

    canLoad(
        route: Route
    ): Observable<boolean>|Promise<boolean>|boolean {
        this.logout();
        
        return Observable.of(true);
    }

    private logout() {
        this.authService.logout();
    }
}
