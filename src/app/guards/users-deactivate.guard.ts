
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class UsersDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    
    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log("UsersDeactivateGuard");
        

        return Observable.of(component.podeDesativar());
    }
}
