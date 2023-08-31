import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaUsuario } from 'src/app/core/models/lista-usuario.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent {

  usuario: Usuario = new Usuario();
  token: { token_jwt: string };

  listaUsuarios: ListaUsuario = new ListaUsuario();

  constructor(
    private router: Router,
    private atomService: AtomicoService) {
    this.montarTabelaListaUsuario();
  }

  montarTabelaListaUsuario() {
    this.atomService.listarUsuarios().subscribe(
      (retorno: ListaUsuario) => this.listaUsuarios = retorno,
      err => this.router.navigate(['/login'])
    );
  }

  formatarData(data: Date) {
    return data ? (new Date(data)).toLocaleDateString('pt-BR') : '';
  }

  formatarDataHora(data: Date) {
    return data ? (new Date(data)).toLocaleTimeString('pt-BR') : '';
  }
}
