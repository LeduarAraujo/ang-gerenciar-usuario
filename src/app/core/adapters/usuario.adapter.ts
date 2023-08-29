import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdapter implements Adapter<Usuario> {
  adapt(item: any): Usuario {

    // TODO: Verificar oque será retornado aqui no item.
      const usuario = item;

      return new Usuario(
        usuario.id,
        usuario.firstName,
        usuario.lastName,
        usuario.email,
        usuario.birthday,
        usuario.login,
        usuario.password,
        usuario.phone,
        usuario.cars,
        usuario.createdAt,
        usuario.lastLogin
      )
  }
}
