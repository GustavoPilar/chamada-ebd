import { Injectable, Input } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { CrudBaseComponent } from "./crud-base.component";

@Injectable({
  providedIn: "root"
})
export class CrudManager {

  //#region Fields
  public entityName: string;
  public entityId: number;
  public crudBaseComponent: CrudBaseComponent;
  //#endregion

  //#region Constructor
  constructor(private apiService: ApiService) {

  }
  //#endregion

  //#region Members :: initialize(), loadEnttities(), loadEntitiy(), deleteEntity()

  /**
   * @description Inicializa as variáveis do CrudManager
   * @param crudBaseComponent CrudBaseComponent que está sendo renderizado
   * @returns void
   */
  public initialize(crudBaseComponent: CrudBaseComponent): void {
    this.crudBaseComponent = crudBaseComponent;
    this.entityName = this.crudBaseComponent.entityName;
    this.entityId = this.crudBaseComponent.entityId;
  }

  /**
   * @description Carrega a lista de entidades
   * @returns Promise any
   */
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

  /**
   * @description Carrega a entidade pelo id
   * @returns Promise any
   */
  public loadEntity(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        if (this.entityId == undefined) {
          return resolve({ id: 0 });
        }

        this.apiService.GetById(this.entityName, this.entityId).then((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Salva a entidade nova
   * @param entity Entidade
   * @returns Promise any
   */
  public saveEntity(entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        console.log(entity);
        this.apiService.Post(this.entityName, entity).then((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Atualiza a entidade
   * @param id Id da entidade
   * @param entity Entidade
   * @returns Promise any
   */
  public updateEntity(id: number, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.Put(this.entityName, id, entity).then((result: any) => {
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

  /**
   * @description Deleta a entidade
   * @param id Id da entidade
   * @param entity Entidade
   * @returns Promise any
   */
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
  //#endregion
}
