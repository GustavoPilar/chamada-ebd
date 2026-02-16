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
        if (this.entityId > 0) {
          this.apiService.getEntityById(this.entityName, this.entityId).then((result: any) => {
            if (result) {
              resolve(result)
            }
          });
        }
        else {
          resolve({ id: 0 });
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public addEntity(entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.postEntity(this.entityName, entity).then((result: any) => {
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

  public updateEntity(entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.putEntityById(this.entityName, this.entityId, entity).then((result: any) => {
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
  //#endregion
}
