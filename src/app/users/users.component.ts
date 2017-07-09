
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../login/auth.service';
import { UsersService } from "./shared/users.service";
import { User } from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  filtro: string;
  users: User[] = []; 
  length: number;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.users = data
      });
  }

  deleteUser(user){
    if(this.authService.possuiPerfil()) {

      if (confirm("Você realmente gostaria de remover o usuário " + user.name + "?")) {

        var index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.usersService.deleteUser(user.id)
          .subscribe(null,
            err => {
              console.log("Erro ao deletar o usuário!");
              
              alert("Não foi possível deletar o usuário!");
              // Revert the view back to its original state
              this.users.splice(index, 0, user);
            }
          );
      }
    }
  }

  getProfileColor() {
    if(this.authService.possuiPerfil()) {
      return;
    }
    return "#949393";
  }

  getProfileShow() {
    if(this.authService.possuiPerfil()) {
      return 'block';
    }
    return 'none';
  }

  getProfileHidden() {
    if(this.authService.possuiPerfil()) {
      return 'none';
    }
    return 'block';
  }
}
