
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UsersService } from './../users/shared/users.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario: Usuario = new Usuario();

  form: FormGroup;

  constructor(
    private http: Http,
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });
    console.log(this.form);
  }

  ngOnInit() {
    
  }

  registrar() {
    
  }

  onKeyUpEnter() {
    this.registrar();
  }

}
