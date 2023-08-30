import { Component } from '@angular/core';
import { AtomicoService } from 'src/app/core/services/atomico.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario;
  msgErro: string = '';

  constructor(
      private atomicoService: AtomicoService,
      private router: Router
    ) {}

  iniciarSessao(formLogin: NgForm) {
    this.atomicoService.login(
      this.usuario.login,
      this.usuario.password
    ).subscribe(
      (retorno: string) =>
      this.router.navigate(['home'],
        {state: JSON.parse(JSON.stringify(retorno))}
      ),
      err => this.msgErro = err.error.message
    );
  }
}
