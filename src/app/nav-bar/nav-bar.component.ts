import { AuthService } from './../login/auth.service';
import { Component, OnInit, DoCheck, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements DoCheck {

  showProfileOptions: boolean = false;

  pathImageLogo: string;
  pathImagePerfil: string;

  usuarioJaAutenticado: boolean;

  constructor(
    private authService: AuthService
  ) {
    this.pathImageLogo = 'assets/img/Logo.png';
    this.pathImagePerfil = 'assets/img/PerfilAdmin.png';

    this.usuarioJaAutenticado = this.authService.usuarioJaAutenticado();
  }

  ngDoCheck() {
    this.usuarioJaAutenticado = this.authService.usuarioJaAutenticado();
  }

  showOptions() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  getProfileOptions() {

    if(this.showProfileOptions) {
      return 'block';
    }
    return 'none';
  }

  escondePerfilOptions() {
    this.showProfileOptions = false; 
  }

  getNome() {
    return this.authService.getNome();
  }

  getPerfil() {
    let perfil: string = this.authService.getPerfil();

    if(perfil == 'ADMIN') {
      return 'Administrador';
    }

    return 'Usuário';
  }
}