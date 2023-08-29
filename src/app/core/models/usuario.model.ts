import { Carro } from "./carro.model";

export class Usuario {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthday: Date,
    public login: string,
    public password: string,
    public phone: string,
    public cars: Carro,
    public createdAt: Date,
    public lastLogin: Date
  ) {}
}
