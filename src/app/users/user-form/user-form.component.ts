import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { User } from '../shared/user';
import { UsersService } from '../shared/users.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  user: User = new User();
  id: any;

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
      phone: [''],
      address: formBuilder.group({
        street: ['', Validators.minLength(3)],
        suite: [],
        city: ['', Validators.maxLength(30)],
        zipcode: ['']
      })
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.title = this.id ? 'Editar Usuário' : 'Novo Usuário';

      if (!this.id) {
        return;
      }

      this.usersService.getUser(this.id)
        .subscribe(
          user => {
            this.user = user
          },
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        userValue = this.form.value;
        

    //if (userValue.id){
    if (this.id){
      result = this.usersService.updateUser(this.id, userValue);
    } else {
      result = this.usersService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }

  consultarCEP() {

    let cep = this.form.get('address.zipcode').value;

    if(cep != undefined) {
      //Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');

      if(cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

          this.resetaDadosForm();

          this.http.get(`//viacep.com.br/ws/${cep}/json`).map(
            dados => dados.json()).subscribe(
              dados => {
                this.populaDadosForm(dados);
              }
            );
        } else {
          this.resetaDadosForm();
        }

      }
    }
  }

  populaDadosForm (dados) {

    this.form.patchValue ({
      address: {
        street: dados.logradouro,
        zipcode: dados.cep,
        numero: '',
        city: dados.localidade
      }
    });
  }

  resetaDadosForm () {
    this.form.patchValue ({
      address: {
        street: '',
        zipcode: '',
        city: ''
      }
    });
  }

  setPerfil(event) {
    if(event.target.checked){   
      this.user.perfil = 'ADMIN';
    } else {
      this.user.perfil = 'USER';
    }
  }
}
