
import { UsuarioLogin } from './usuario';
import { AuthService } from './auth.service';

declare var Materialize:any;

import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pathImageLogo: string;
  usuario: UsuarioLogin = new UsuarioLogin();
  erro: boolean = false;

  constructor(
    private authService: AuthService
  ) { 
    this.pathImageLogo = 'assets/img/Logo.png';
  }

  ngOnInit() {
    
  }

  realizarLogin() {
    let resultado: boolean = this.authService.fazerLogin(this.usuario);

    if(resultado) {
      this.erro = false;
      Materialize.toast('Login realizado com sucesso!', 3000, 'rounded');
    } else {
      this.erro = true;
    }

    return resultado;
  }

  onKeyUpEnter() {
    this.realizarLogin();
  }
}
