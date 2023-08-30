import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() usuario: Usuario = new Usuario;
  @Input() token: { token_jwt: string };

  constructor(
    private atomicoService: AtomicoService,
    private router: Router
  ) { this.validarSessao() }

  validarSessao() {
    debugger
    this.token = (this.router.getCurrentNavigation()?.extras.state as {
      token_jwt: string
    });

    if (this.token) {
      this.atomicoService.getUsuarioLogado(this.token.token_jwt).subscribe(
        (retorno: Usuario) => {
          this.usuario = retorno;
        },
        err => this.router.navigate(['/login'])
      );
    } else { this.router.navigate(['/login']) }
  }

  direcionarRota(rota: string) {
    this.router.navigate([rota], {state: this.token});
  }

  deslogar() {
    this.router.navigate(['/login']);
  }
}
