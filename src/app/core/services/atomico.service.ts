import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioAdapter } from '../adapters/usuario.adapter';
import { TokenAdapter } from '../adapters/token.adapter';
import { ListaUsuario } from '../models/lista-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AtomicoService {

  constructor(
    private http: HttpClient,
    private usuarioAdapter: UsuarioAdapter,
    private tokenAdapter: TokenAdapter
  ) { }

  login(usuario?: string, senha?: string) {
    return this.http.get<ListaUsuario>('/api/users');
  }


  // login(usuario?: string, senha?: string) {
  //   const url = '/api/users';

  //   return this.http.get(url).pipe(
  //     map(response => this.tokenAdapter.adapt(response))
  //   )
  // }

}
