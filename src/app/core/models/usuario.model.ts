import { Carro } from "./carro.model";

export class Usuario {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  birthday: Date | undefined;
  login: string | undefined;
  password: string | undefined;
  phone: string | undefined;
  cars: Carro | undefined;
  createdAt: Date | undefined;
  lastLogin: Date | undefined;
}
