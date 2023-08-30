import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";

@Injectable({
  providedIn: 'root'
})
export class TokenAdapter implements Adapter<string>{
  adapt(item: any): string {
    // TODO: Verificar oque será retornado aqui no item.
      return item;
  }
}
