import { Genre } from "../enums/Genre";


export interface IGame{
    id?: number;
    title: string;
    releaseDate?: number;
    gameGenre: Genre;
    gameImgUrl?: string;
    shortDescription?: string;
    fullDescription?: string;
    hoursPlayed?: number;
    rating: number;
}