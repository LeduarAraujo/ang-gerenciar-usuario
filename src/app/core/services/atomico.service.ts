import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { SucessMessage } from '../models/sucess-message.model';
import { ListaUsuario } from '../models/lista-usuario.model';
import { DadosUsuario } from '../models/dados-usuario.model';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root'
})
export class AtomicoService {

  constructor(
    private http: HttpClient
  ) { }

  listarUsuarios() {
    const url = '/v1/api/users';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.get<ListaUsuario>(url, { headers: headers });
  }

  cadastrarUsuario(usuario: Usuario) {
    const url = '/v1/api/users';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post<SucessMessage>(url, JSON.stringify(usuario),
      { headers: headers });
  }

  buscarUsuarioPorCodigo(usuario: Usuario) {
    const url = '/v1/api/users/' + usuario.id;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.get<DadosUsuario>(url, { headers: headers });
  }

  alterarDadosUsuario(usuario: Usuario) {
    const url = '/v1/api/users/' + usuario.id;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post<SucessMessage>(url, JSON.stringify(usuario),
      { headers: headers });
  }

  removerUsuario(idUsuario: string) {
    const url = '/v1/api/users/' + idUsuario;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.delete<DadosUsuario>(url, { headers: headers });
  }

  login(usuario?: string, senha?: string) {
    const url = '/v1/api/signin';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post<string>(url, JSON.stringify({
      login: usuario,
      senha: senha
    }), { headers: headers });
  }

  // Rotas com autenticação

  listarCarrosUsuario(token_jwt: string) {
    const url = '/v1/api/cars';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token_jwt
    });

    return this.http.get<DadosUsuario>(url, { headers: headers });
  }

  incluirCarroUsuario(token_jwt: string, carro: Carro) {
    const url = '/v1/api/cars';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token_jwt
    });

    return this.http.post<SucessMessage>(url, JSON.stringify(carro),
      { headers: headers });
  }

  consultarCarrosUsuario(token_jwt: string, carro: Carro) {
    const url = '/v1/api/cars/' + carro.idCarro;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token_jwt
    });

    return this.http.get<Carro>(url, { headers: headers });
  }

  alterarDadosCarro(token_jwt: string, carro: Carro) {
    const url = '/v1/api/cars/' + carro.idCarro;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token_jwt
    });

    return this.http.post<SucessMessage>(url, JSON.stringify(carro),
      { headers: headers });
  }

  removerCarroUsuario(token_jwt: string, carro: Carro) {
    const url = '/v1/api/cars/' + carro.idCarro;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token_jwt
    });

    return this.http.delete<SucessMessage>(url, { headers: headers });
  }

  getUsuarioLogado(token: string) {
    const url = '/v1/api/me';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token_jwt': token
    });

    return this.http.get<Usuario>(url, { headers: headers });
  }
}
