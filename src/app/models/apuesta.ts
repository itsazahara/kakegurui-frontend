import { Apostador } from "./apostador";
import { Juego } from "./juego";

export interface Apuesta {
  id: number;
  descripcion: string;
  resultado: string;
  juego: Juego;
  participantes: Apostador[];
}
