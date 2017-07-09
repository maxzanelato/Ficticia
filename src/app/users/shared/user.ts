import { Address } from './address';

export class User {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  address: Address = new Address();
  perfil: string = 'USER';
}
