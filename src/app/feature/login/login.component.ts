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

  usuario: Usuario = new Usuario();

  constructor(
      private atomicoService: AtomicoService,
      private router: Router
    ) {}

  iniciarSessao(formCadastro: NgForm) {
    const token = this.atomicoService.login(this.usuario.login,
      this.usuario.password);
      debugger
      console.log(token);
  }
}
