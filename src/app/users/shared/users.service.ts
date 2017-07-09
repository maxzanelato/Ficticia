
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BancoDeDadosUsuarioService } from './../../banco-de-dados-usuario/banco-de-dados-usuario.service';

@Injectable()
export class UsersService {

  constructor(
    private bancoDeDados: BancoDeDadosUsuarioService
  ) { }

  getUsers(){
      return Observable.of(this.bancoDeDados.getUsers());
  }

  getUser(id){
    return Observable.of(this.bancoDeDados.getUser(id));
  }

  addUser(user){
    return Observable.of(this.bancoDeDados.addUser(user));
  }

  updateUser(id, user){
      return Observable.of(this.bancoDeDados.update(id, user));
  }

  deleteUser(id){
    return Observable.of(this.bancoDeDados.deleteUser(id));
  }
}
