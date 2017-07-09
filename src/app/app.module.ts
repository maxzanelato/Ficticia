import { AuthorizationGuard } from './guards/authorization.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { UsersRoutingModule } from './users/users.routing.module';
import { AuthService } from './login/auth.service';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersModule } from "./users/users.module";
import { LoginComponent } from './login/login.component';
import { UsersGuard } from './guards/users.guard';
import { AuthGuard } from './guards/auth.guard';
import { UsersDeactivateGuard } from './guards/users-deactivate.guard';
import { LogoutComponent } from './logout/logout.component';
import { LogoutGuard } from './guards/logout.guard';
import { RegistrarComponent } from './registrar/registrar.component';
import { BancoDeDadosUsuarioService } from './banco-de-dados-usuario/banco-de-dados-usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    UsersModule,
    UsersRoutingModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersGuard,
    LogoutGuard,
    AuthorizationGuard,
    UsersDeactivateGuard,
    BancoDeDadosUsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
