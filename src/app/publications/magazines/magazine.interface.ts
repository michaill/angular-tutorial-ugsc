import { Publication } from "../common/publication.interface";

export enum Periodicity {
    YEAR = 'year',
    QUARTER = 'quarter',
    MONTH = 'month',
    WEEK = 'week',
    DAY = 'day'
} 

export interface Magazine extends Publication {
    periodicity: Periodicity;
}