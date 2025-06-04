import { Apostador } from "./apostador";
import { Role } from "./role";

export interface Personaje {
  id: number;
  nombre: string;
  edad: number;
  role: Role;
  imagen: string;
  descripcion: string;
  apuestas?: Apostador[];
}
