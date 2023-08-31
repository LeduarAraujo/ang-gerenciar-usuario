import { Carro } from "./carro.model";

export class DadosUsuario {
  public idUsuario: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public birthday: Date;
  public login: string;
  public password: string;
  public phone: string;
  public cars: Carro[];
  public createdAt: Date;
  public lastLogin: Date;
}
