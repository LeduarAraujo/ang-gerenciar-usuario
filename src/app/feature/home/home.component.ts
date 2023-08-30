import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private atomService: AtomicoService) {
    this.validarSessao();
  }

  validarSessao() {
    let token = (this.router.getCurrentNavigation()?.extras.state as {
      token_jwt: string
    });

    if (token) {
      this.atomService.getUsuarioLogado(token.token_jwt).subscribe(
        (retorno: Usuario) => this.prepararSessao(retorno),
        err => this.router.navigate(['login'])
      );
    } else {
      this.router.navigate(['login']);
    }
  }

  prepararSessao(retorno: Usuario) {
    this.router.navigate(['home'],
      { state: JSON.parse(JSON.stringify(retorno)) }
    );

    this.usuario = retorno;
  }
}
