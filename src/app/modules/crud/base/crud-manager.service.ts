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

  /**
   * @description Retorna as entidades
   * @returns Promise any[]
   */
  public getEntities(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      try {
        this.apiService.getEntities(this.entityName).then((result: any[]) => {
          if (result) {
            resolve(result);
          }
        }, (error: any) => {
          reject(error);
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Retorna uma entidade pelo ID. Se não houver id, resolve com um objeto padrão com ID igual a 0
   * @returns Promise any
   */
  public getEntityById(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        if (this.entityId > 0) {
          this.apiService.getEntityById(this.entityName, this.entityId).then((result: any) => {
            if (result) {
              resolve(result)
            }
          }, (error: any) => {
            reject(error);
          });
        }
        else {
          resolve({ id: 0 });
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   * @description Cria a entidade
   * @param entity Entidade
   * @returns Promise any
   */
  public createEntity(entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.createEntity(this.entityName, entity).then((result: any) => {
          if (result) {
            resolve(result);
          }
        }, (error: any) => {
          reject(error);
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Atualiza a entidade
   * @param entity Entidade
   * @returns Promise any
   */
  public updateEntity(entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.updateEntity(this.entityName, this.entityId, entity).then((result: any) => {
          if (result) {
            resolve(result);
          }
        }, (error) => {
          reject(error);
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Deleta um ou mais registros
   * @param ids IDs selecionados
   * @returns Promise any
   */
  public deleteEntities(ids: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.deleteEntities(this.entityName, ids).then((result: any) => {
          if (result) {
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
