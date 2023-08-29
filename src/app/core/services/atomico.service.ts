import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioAdapter } from '../adapters/usuario.adapter';

@Injectable({
  providedIn: 'root'
})
export class AtomicoService {

  constructor(
    private http: HttpClient,
    private usuarioAdapter: UsuarioAdapter
  ) { }

  get(usuario: string) {
    const url = `url`;

    return this.http.get(url).pipe(
      map(response => this.usuarioAdapter.adapt(response))
    )
  }

}
