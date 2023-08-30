import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { UsuarioAdapter } from '../adapters/usuario.adapter';
import { TokenAdapter } from '../adapters/token.adapter';
import { ListaUsuario } from '../models/lista-usuario.model';
import { ListaUsuarioAdapter } from '../adapters/listaUsuario.adapter';
import { Usuario } from '../models/usuario.model';
import { SucessMessage } from '../models/sucess-message.model';

@Injectable({
  providedIn: 'root'
})
export class AtomicoService {

  constructor(
    private http: HttpClient
    // private usuarioAdapter: UsuarioAdapter,
    // private tokenAdapter: TokenAdapter,
    // private listaUsuarioAdapter: ListaUsuarioAdapter
  ) { }

  login(usuario?: string, senha?: string) {
    const url = '/v1/api/signin';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post<string>(url, JSON.stringify({
        login: usuario,
        senha: senha
      }), {headers: headers});
  }

  getUsuarioLogado(token: string) {
    const url = '/v1/api/me';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token
    });

    return this.http.get<Usuario>(url, {headers: headers});
  }

  cadastrarUsuario(usuario: Usuario) {
    const url = '/v1/api/users';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post<SucessMessage>(url, JSON.stringify(usuario),
      {headers: headers});
  }

}
