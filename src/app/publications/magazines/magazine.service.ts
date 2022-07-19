import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HOSTNAME } from "../common/publication.interface";
import { Magazine } from "./magazine.interface";

@Injectable({ providedIn: 'root' })
export class MagazineService {
    private readonly endpointName = 'magazines/';

    constructor(private http: HttpClient) {
        console.log("magazine service instantiated");
    }

    getAll(): Observable<Magazine[]> {
        return this.http.get<Magazine[]>(
            HOSTNAME + this.endpointName
        );
    }

    getById(id: number): Observable<Magazine> {
        return this.http.get<Magazine[]>(
            HOSTNAME + this.endpointName + "?id=" + id
        ).pipe(
            map((results) => results[0])
        );
    }

    create(item: Omit<Magazine, 'id'>): Observable<void> {
        return this.http.post<void>(
            HOSTNAME + this.endpointName,
            item
        );
    }

    edit(item: Magazine): Observable<void> {
        return this.http.put<void>(
            HOSTNAME + this.endpointName + item.id,
            item
        );
    }
}