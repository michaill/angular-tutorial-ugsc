import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HOSTNAME, Publication } from "./publication.interface";
import { API_ENDPOINT_URL } from "./publication.tokens";

@Injectable()
export class PublicationService<ItemType extends Publication> {
    constructor(
        private http: HttpClient,
        @Inject(API_ENDPOINT_URL) private readonly endpointName: string
    ) {
        console.log(`Service for ${this.endpointName} instantiated`);
    }

    getAll(): Observable<ItemType[]> {
        return this.http.get<ItemType[]>(
            HOSTNAME + this.endpointName
        );
    }

    getById(id: number): Observable<ItemType> {
        return this.http.get<ItemType[]>(
            HOSTNAME + this.endpointName + "?id=" + id
        ).pipe(
            map((results) => results[0])
        );
    }

    create(item: Omit<ItemType, 'id'>): Observable<void> {
        return this.http.post<void>(
            HOSTNAME + this.endpointName,
            item
        );
    }

    edit(item: ItemType): Observable<void> {
        return this.http.put<void>(
            HOSTNAME + this.endpointName + item.id,
            item
        );
    }
}