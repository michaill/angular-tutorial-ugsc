import { Publication } from "../common/publication.interface";

export interface Book extends Publication {
    isbn: string;
}