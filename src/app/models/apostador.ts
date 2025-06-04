import { Apuesta } from "./apuesta";
import { Personaje } from "./personaje";
import { Resultado } from "./resultado";

export interface Apostador {
  id: number;
  apuesta: Apuesta;
  personaje: Personaje;
  itemApostado: string;
  resultado: Resultado;
}
