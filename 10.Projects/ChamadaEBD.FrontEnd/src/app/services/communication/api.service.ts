import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor (private httpClient: HttpClient) {

  }

  public async Get(entityName: string): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      try {
        let url = `https://localhost:7083/${entityName}`;
        let header: {
          'Content-Type': 'application/json'
        }

        this.httpClient.get(url, {headers: header }).subscribe((result: any) => {
          if (result) {
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public async GetById(entityName: string, id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let url = `https://localhost:7083/${entityName}/${id}`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers}).subscribe((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public async Post(entityName: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let url = `https://localhost:7083/${entityName}`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.post(url, data, { headers: headers}).subscribe((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public async Put(entityName: string, id: number, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let url = `https://localhost:7083/${entityName}/${id}`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.put(url, data, { headers: headers}).subscribe((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public async Delete(entityName: string, id: number, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let url = `https://localhost:7083/${entityName}/${id}`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.delete(url, { headers: headers, body: data }).subscribe((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}
