import { Usuario } from './../registrar/usuario';
import { UsuarioLogin } from './usuario';
import { UsersService } from './../users/shared/users.service';
import { User } from './../users/shared/user';

import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private nome: string;
  private perfil: string = 'USER';
  private usuarioAutenticado: boolean = false;
  private users: User[] = [];

  mostrarMenuEmitter =  new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { 
    this.usersService.getUsers()
      .subscribe(data => {
        this.users = data
      });
  }

  possuiPerfil() {
    return this.perfil == 'ADMIN';
  }

  fazerLogin(usuario: UsuarioLogin) { 

    for(let cadaUsuario of this.users) {
      
      if(usuario.nome == cadaUsuario.email && usuario.senha == cadaUsuario.password) {

        this.usuarioAutenticado = true;
        this.perfil = cadaUsuario.perfil;
        this.nome = cadaUsuario.name;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);

        return true;
      }
    }

    if(usuario.nome == 'changeit' && usuario.senha == 'changeit') {

      this.usuarioAutenticado = true;

      this.perfil = 'ADMIN';
      this.nome = 'Max';

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

      return true;
    } else if(usuario.nome == '1' && usuario.senha == '1') {

      this.usuarioAutenticado = true;

      this.perfil = 'USER';
      this.nome = '1';

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

      return true;
    } else {
      this.mostrarMenuEmitter.emit(false);

      this.nome = '';

      this.usuarioAutenticado = false;

      return false;
    }
  }

  usuarioJaAutenticado () {
    return this.usuarioAutenticado;
  }

  getNome() {
    return this.nome;
  }

  getPerfil() {
    return this.perfil;
  }

  logout() {
    this.usuarioAutenticado = false;
    this.perfil = 'USER';
    
    this.mostrarMenuEmitter.emit(false);
  }
}
