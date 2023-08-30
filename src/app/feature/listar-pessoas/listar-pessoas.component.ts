import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent {

  usuario: Usuario = new Usuario();
  token: { token_jwt: string };

  constructor(
    private router: Router,
    private atomService: AtomicoService) {
    this.validarSessao();
  }

  validarSessao() {
    this.token = (this.router.getCurrentNavigation()?.extras.state as {
      token_jwt: string
    });

    if(!this.token) {
      this.token = (this.router.getCurrentNavigation()?.previousNavigation?.extras.state as {
        token_jwt: string
      });
    }

    if (this.token) {
      this.atomService.getUsuarioLogado(this.token.token_jwt).subscribe(
        (retorno: Usuario) => {
          this.usuario = retorno;
          this.router.navigate([], {state: this.token});
        },
        err => this.router.navigate(['/login'])
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
