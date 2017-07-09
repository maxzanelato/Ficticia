import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class BancoDeDadosUsuarioService implements OnInit {

  users: string = 
      '[{"id": "2", "name": "Max", "phone": "48988352528", "email": "maxzanelato@gmail.com", "password": "max", "perfil": "ADMIN", "address": {"street": "Rua A", "suite": "236", "city": "Cidade A", "zipcode": "88037-085"}}, ' + 
      '{"id": "1", "name": "Maria", "phone": "48988352529", "email": "maria@gmail.com", "password": "maria", "perfil": "USER", "address": {"street": "Rua B", "suite": "237", "city": "Cidade B", "zipcode": "88040-400"}}]';

  constructor() { }

  ngOnInit() {
  }

  private parseJsonToArray() {
    return JSON.parse(this.users);
  }

  private parseArrayToJson(array) {
    return JSON.stringify(array);
  }

  getUsers() {
    return this.parseJsonToArray();
  }

  getUser(i: number) {
    let array: any[] = this.parseJsonToArray();  
    let usuarioEncontrado = this.getPosicaoId(i, array);

    return array[usuarioEncontrado];
  }

  addUser(user:any) {
    let array: any[] = this.parseJsonToArray();
    user.id = this.geraId();
    user.password = 'changeit';
    array.push(user);
    this.users = this.parseArrayToJson(array);
  }

  deleteUser(i: number) {
    let array: any[] = this.parseJsonToArray();    

    let usuarioEncontrado = this.getPosicaoId(i, array);

    let removido = array.splice(usuarioEncontrado, 1);
    let json = this.parseArrayToJson(array);
    this.users = json;

    return removido;
  }

  update(i: number, user: any) {
    console.log("Index: " + i);
    
    let antes = this.parseJsonToArray();   

    let usuarioEncontrado = this.getPosicaoId(i, antes);

    user.id = i;
    antes[usuarioEncontrado] = user;

    let depois = JSON.stringify(antes);
    
    this.users = depois;
  }

  private getPosicaoId(id: number, array: any[]) {

    for(let j = 0; j < array.length; j++) {
      if(array[j].id == id) {
        return j;
      }
    }
    
    return -1;
  }

  private geraId() {
    let array: any[] = this.parseJsonToArray();

    array.sort(this.compare);

    return Number(array[array.length - 1].id) + 1;
  }

  private compare(a, b) {
    if (a.id < b.id)
      return -1;
    if (a.id > b.id)
      return 1;
    return 0;
  }
}
