import { Juego } from "./juego";

export interface Episodio {
  id: number;
  temporada: number;
  numeroEpisodio: number;
  sinopsis: string;
  juegos?: Juego[];
}
