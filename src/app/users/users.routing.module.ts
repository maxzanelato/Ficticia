import { AuthorizationGuard } from './../guards/authorization.guard';
import { AuthGuard } from './../guards/auth.guard';
import { UsersDeactivateGuard } from './../guards/users-deactivate.guard';
import { UsersGuard } from './../guards/users.guard';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users.component';

import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = [
  { 
    path: 'users', 
    component: UsersComponent, 
    canActivate: [UsersGuard, AuthGuard],
    canLoad: [AuthGuard]
  },
  { 
    path: 'users/new', 
    component: UserFormComponent,
    canActivate: [UsersGuard, AuthGuard, AuthorizationGuard], 
    canLoad: [AuthGuard, AuthorizationGuard]
  },
  { 
    path: 'users/:id', 
    component: UserFormComponent,
    canActivate: [UsersGuard, AuthGuard, AuthorizationGuard],
    canLoad: [AuthGuard, AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

