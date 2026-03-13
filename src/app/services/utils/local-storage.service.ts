import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor() { }
  //#endregion

  //#region 'Geral' members

  /** Salva dados no local storage */
  public saveInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /** Remove o dado no local storage */
  public removeInLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /** Retorna um objeto do local storage */
  public getInLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  //#endregion

  //#region 'CrudList' Members

  /** Salva a página que a lista da entidade específica está */
  public savePageInLocalStorage(entityName: string, pageInfo: { first: number, rows: number }): void {
    this.saveInLocalStorage("list_of_" + entityName, pageInfo);
  }

  /** retorna a configuração da página que a lista da entidade específica possui */
  public getPageInLocalStorage(entityName: string): { first: number, rows: number } | null {
    const data = localStorage.getItem("list_of_" + entityName);

    if (!data) return null;

    return JSON.parse(data);
  }

  //#endregion

}
