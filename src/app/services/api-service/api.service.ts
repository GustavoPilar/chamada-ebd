import { HttpClient } from "@angular/common/http";
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
        console.log(url);

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
        console.log(url);

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
}
