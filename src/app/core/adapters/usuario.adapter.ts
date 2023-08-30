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
      const retorno = new Usuario();

      retorno.id = usuario.id;
      retorno.firstName = usuario.firstName;
      retorno.lastName = usuario.lastName;
      retorno.email = usuario.email;
      retorno.birthday = usuario.birthday;
      retorno.login = usuario.login;
      retorno.password = usuario.password;
      retorno.phone = usuario.phone;
      retorno.cars = usuario.cars;
      retorno.createdAt = usuario.createdAt;
      retorno.lastLogin = usuario.lastLogin;

      return retorno;
  }
}
