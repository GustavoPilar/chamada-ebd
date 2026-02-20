import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CHAMADA_EBD_API_URL } from "../../core/global/global";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  //#region Fields
  //#endregion

  //#region Constructor
  constructor(private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {

  }
  //#endregion

  //#region Get

  /**
   * @description Retorna uma lista de entidades
   * @param entityName Nome da entidade
   * @returns Promise any
   */
  public getEntities<T>(entityName: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();

        this.httpClient.get(`${CHAMADA_EBD_API_URL}/${entityName}`, {
          headers: {
            "Content-Type": "application/json"
          }
        }).subscribe({
          next: (result: any) => {
            if (result) {
              this.spinner.hide();
              resolve(result);
            }
          },
          error: (error) => {
            this.spinner.hide();
            reject(error);
          }
        });

      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }

  /**
   * @description Retorna uma entidade pelo ID
   * @param entityName Nome da entidade
   * @param entityId Id da entidade
   * @returns Promise any
   */
  public getEntityById(entityName: string, entityId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();

        this.httpClient.get(`${CHAMADA_EBD_API_URL}/${entityName}/${entityId}`, {
          headers: {
            "Content-Type": "application/json"
          }
        }).subscribe({
          next: (result: any) => {
            if (result) {
              this.spinner.hide();
              resolve(result);
            }
          },
          error: (error) => {
            this.spinner.hide();
            reject(error);
          }
        });
      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }
  //#endregion

  //#region Put

  /**
   * @description Atualiza uma entidade
   * @param entityName Nome da entidade
   * @param entityId ID da entidade
   * @param entity Entidade atualizada
   * @returns Promise any
   */
  public updateEntity(entityName: string, entityId: number, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();

        this.httpClient.put(`${CHAMADA_EBD_API_URL}/${entityName}/${entityId}`, entity, {
          headers: {
            "Content-Type": "application/json"
          }
        }).subscribe({
          next: (result: any) => {
            if (result) {
              this.spinner.hide();
              resolve(result);
            }
          },
          error: (error) => {
            this.spinner.hide();
            reject(error);
          }
        });
      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }
  //#endregion

  //#region Post

  /**
   * @description Cria uma nova entidade
   * @param entityName Nome da entidade
   * @param entity Entidade
   * @returns Promise any
   */
  public createEntity(entityName: string, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();

        this.httpClient.post(`${CHAMADA_EBD_API_URL}/${entityName}`, entity, {
          headers: {
            "Content-Type": "application/json"
          }
        }).subscribe({
          next: (result: any) => {
            if (result) {
              this.spinner.hide();
              resolve(result);
            }
          },
          error: (error) => {
            this.spinner.hide();
            reject(error);
          }
        });
      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }
  //#endregion

  //#region Delete
  /**
   * @description Deleta uma ou várias entidades, através dos IDs selecionados
   * @param entityName Nome da entidade
   * @param ids IDs da entidade
   * @returns Promise any
   */
  public async deleteEntities(entityName: string, ids: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let first: number = ids[0] - 1;
        let last: number = ids.length == 1 ? ids[ids.length - 1] : ids[ids.length - 1] + 1
        let range: number[] = [first, last];

        let params = new HttpParams();
        range.forEach(id => {
          params = params.append('ids', id);
        });

        this.httpClient.delete(`${CHAMADA_EBD_API_URL}/${entityName}/delete`, {
          headers: {
            "Content-Type": "application/json"
          },
          params
        }).subscribe({
          next: (result: any) => {
            if (result) {
              this.spinner.hide();
              resolve(result);
            }
          },
          error: (error: any) => {
            this.spinner.hide();
            reject(error);
          }
        });
      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }
  //#endregion
}
