export const HOSTNAME = 'http://localhost:3000/';

export interface Publication {
    id: number;
    name: string;
    author: string;
    year: number;
    description: string;
}