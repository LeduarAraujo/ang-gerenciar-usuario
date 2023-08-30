import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";
import { ListaUsuario } from "../models/lista-usuario.model";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})

export class ListaUsuarioAdapter implements Adapter<ListaUsuario> {
  adapt(item: any): ListaUsuario {
    // const usuario = item.listUser;
    const retorno: ListaUsuario = new ListaUsuario();

    item.listUser.forEach((usuario: { id: string; }) => {
      const usuarioAux = new Usuario();
      usuarioAux.id = usuario.id;
      retorno.listUser.push(usuarioAux);
    });

    return retorno;
  }
}
