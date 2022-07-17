import { Publication } from "../common/publication.interface";

export interface BoardGame extends Publication {
    minPlayers: number;
    maxPlayers: number;
}