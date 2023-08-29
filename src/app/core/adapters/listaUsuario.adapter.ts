import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";
import { ListaUsuario } from "../models/lista-usuario.model";

@Injectable({
  providedIn: 'root'
})

export class ListaUsuarioAdapter implements Adapter<ListaUsuario> {
  adapt(item: any): ListaUsuario {

    // TODO: Verificar oque será retornado aqui no item.
      const usuario = item;

      return retorno;
  }
}
