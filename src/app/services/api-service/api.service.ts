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
  public async getEntities(entityName: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let url: string = `${CHAMADA_EBD_API_URL}/${entityName}`;

        let header: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: header }).subscribe((result: any) => {
          if (result) {
            this.spinner.hide();
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        this.spinner.hide();
        reject(error);
      }
    })
  }

  public async getEntityById(entityName: string, entityId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let url: string = `${CHAMADA_EBD_API_URL}/${entityName}/${entityId}`;

        let header: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: header }).subscribe((result: any) => {
          if (result) {
            this.spinner.hide();
            resolve(result);
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
  public async putEntityById(entityName: string, entityId: number, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let url: string = `${CHAMADA_EBD_API_URL}/${entityName}/${entityId}`;

        let header: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.put(url, data, { headers: header }).subscribe((result: any) => {
          if (result) {
            this.spinner.hide();
            resolve(result);
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
  public async postEntity(entityName: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let url: string = `${CHAMADA_EBD_API_URL}/${entityName}`;

        let header: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.post(url, data, { headers: header }).subscribe((result: any) => {
          if (result) {
            this.spinner.hide();
            resolve(result);
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
  public async deleteEntities(entityName: string, ids: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.spinner.show();
        let first: number = ids[0]; // 1
        let last: number = ids.length == 1 ? ids[ids.length - 1] : ids[ids.length - 1] + 1
        let range: number[] = [first, last];

        let url: string = `${CHAMADA_EBD_API_URL}/${entityName}/delete`;

        let params = new HttpParams();
        range.forEach(id => {
          params = params.append('ids', id);
        });

        let header: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.delete(url, { headers: header, params: params }).subscribe((result: any) => {
          if (result) {
            this.spinner.hide();
            resolve(result);
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
