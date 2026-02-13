import { Injectable } from "@angular/core";
import { CrudBaseComponent } from "./crud-base";
import { ApiService } from "../../../services/api-service/api.service";

@Injectable({
  providedIn: "root"
})
export class CrudManager {

  //#region Fields
  public entityName!: string;
  public entityId!: number;
  public entities: any[] = [
    { id: 1, name: "Abertura", dateTime: new Date(), description: "Culto de abertura e apresentação do calendário", location: "Igreja", active: true},
    { id: 2, name: "cafofo", dateTime: new Date(), description: "Culto na casa de um membro", location: "Casa do Gustavo", active: true },
  ]
  //#endregion

  //#region Constructor
  constructor(private apiService: ApiService) {

  }
  //#endregion

  //#region initialize
  public initialize(crudBaseComponent: CrudBaseComponent) {
    this.entityName = crudBaseComponent.entityName;
    this.entityId = crudBaseComponent.entityId;
  }
  //#endregion

  //#region Api requests
  public getEntities(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      try {
        this.apiService.getEntities(this.entityName).then((result: any[]) => {
          if (result) {
            resolve(result);
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public getEntityById(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let index = this.entities.findIndex(x => x.id == this.entityId);
        let entity = this.entities[index] ?? { id: 0 };

        Promise.resolve(entity).then((result: any) => {
          if (result) {
            resolve(result)
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
