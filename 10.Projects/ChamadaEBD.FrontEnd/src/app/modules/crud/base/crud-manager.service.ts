import { Injectable, Input } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { CrudBaseComponent } from "./crud-base.component";

@Injectable({
    providedIn: "root"
})
export class CrudManager {
    
    public entityName;
    public crudBaseComponent: CrudBaseComponent; 

    constructor(private apiService: ApiService) {

    }

    public initialize(crudBaseComponent: CrudBaseComponent): void {
        this.crudBaseComponent = crudBaseComponent;
        this.entityName = this.crudBaseComponent.entityName;
    }

    public loadEntities(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                this.apiService.Get(this.entityName).then((result) => {
                    resolve(result);
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public deleteEntity(id: number, entity: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                this.apiService.Delete(this.entityName, id, entity).then((result: any) => {
                    resolve(result);
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }
}
