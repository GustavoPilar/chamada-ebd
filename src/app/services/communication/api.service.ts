import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EntityBase } from "../../models/base/entity-base";
import { Attendance } from "../../models/entities";
import { CHAMADA_EBD_API_URL } from "../../core/global/global";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    //#region Fields
    //#endregion

    //#region Constructor
    constructor(private httpClient: HttpClient) {}
    //#endregion

    //#region Observables
    public getEntities<T = EntityBase>(entityName: string): Observable<T[]> {
        return this.httpClient.get<T[]>(`${CHAMADA_EBD_API_URL}/${entityName}`, { headers: { "Content-Type": "application/json" } });
    }

    public getEntityById<T = EntityBase>(entityName: string, id: number): Observable<T> {
        if (id <= 0 || id == undefined || isNaN(id)) return of({ id: 0 } as T);

        return this.httpClient.get<T >(`${CHAMADA_EBD_API_URL}/${entityName}/${id}`, { headers: { "Content-Type": "application/json" } });
    }

    public createEntity<T = EntityBase>(entityName: string, entity: T): Observable<T > {
        return this.httpClient.post<T >(`${CHAMADA_EBD_API_URL}/${entityName}`, entity, { headers: { "Content-Type": "application/json" } });
    }

    public updateEntity<T = EntityBase>(entityName: string, id: number, entity: T): Observable<T > {
        return this.httpClient.put<T >(`${CHAMADA_EBD_API_URL}/${entityName}/${id}`, entity, { headers: { "Content-Type": "application/json" } });
    }

    public transferEntity<T = EntityBase>(entityName: string, entity: T): Observable<T > {
        return this.httpClient.put<T >(`${CHAMADA_EBD_API_URL}/${entityName}`, entity, { headers: { "Content-Type": "application/json" } });
    }

    public updateAttendance(className: string, entityId: number, att: Attendance): Observable<void> {
        return this.httpClient.put<void>(`${CHAMADA_EBD_API_URL}/classroll/${className}/${entityId}/attendance`, att, { headers: { "Content-Type": "application/json" } });
    }

    public deleteEntity<T = EntityBase>(entityName: string, entityId: number): Observable<T > {
        return this.httpClient.delete<T >(`${CHAMADA_EBD_API_URL}/${entityName}/${entityId}`);
    }
    //#endregion
}
