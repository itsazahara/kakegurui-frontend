import { Apuesta } from "./apuesta";
import { Episodio } from "./episodio";

export interface Juego {
  id: number;
  nombre: string;
  reglas: string;
  episodio: Episodio;
  apuestas?: Apuesta[];
}
