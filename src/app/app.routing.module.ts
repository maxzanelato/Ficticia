
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule',
    /*canActivate: [AuthGuard], 
    canLoad: [AuthGuard]*/
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'logout',
    component: LogoutComponent,
    canActivate: [LogoutGuard], 
    canLoad: [LogoutGuard]
  },
  { 
    path: '', 
    pathMatch: 'full', 
    component: HomeComponent, 
    canActivate: [AuthGuard], 
    canLoad: [AuthGuard]
  },
  { 
    path: 'not-found', 
    component: NotFoundComponent 
  },
  { 
    path: '**', 
    redirectTo: 'not-found' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
