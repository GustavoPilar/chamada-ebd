import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  //#region Constructor
  constructor(private httpClient: HttpClient,
    private ngxSpinnerService: NgxSpinnerService,
    private messageService: MessageService
  ) {

  }
  //#endregion

  //#region Api requests 'Gets' :: Get(), GetById(), GetByIds()

  /**
   * @description Retorna uma lista de entidades
   * @param entityName Nome da entidade
   * @returns Promise any
   */
  public async Get(entityName: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();
        let url = `https://localhost:7083/${entityName}`;
        let header: {
          'Content-Type': 'application/json'
        }

        this.httpClient.get(url, { headers: header }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   * @description Retorna uma entidade pelo Id
   * @param entityName Nome da entidade
   * @param id Id da entidade
   * @returns Promise any
   */
  public async GetById(entityName: string, id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();
        let url = `https://localhost:7083/${entityName}/${id}`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        reject(error);
        this.ngxSpinnerService.hide();
      }
    });
  }

  /**
   * @description Retorna uma lista de entidades pelos ids selecionados
   * @param entityName Nome da entidade
   * @param ids Array de ids de entidades
   * @returns Promise any
   */
  public async GetByIds(entityName: string, ids: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}/byEntitiesIds`;

        let params = new HttpParams();
        ids.forEach((id: number) => {
          params = params.append("ids", id.toString());
        });

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers, params: params }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }
  //#endregion

  //#region Api request "Post" :: Post(), PostRange()

  /**
   * @description Salva a entidade nova
   * @param entityName Nome da entidade
   * @param entity Entidade que será salva
   * @returns Promise any
   */
  public async Post(entityName: string, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}`;

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.post(url, entity, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }

  /**
   * @description Salva um array de entidades novas
   * @param entityName Nome da entidade
   * @param entities Entidades que serão salvas
   * @returns Promise any
   */
  public async PostRange(entityName: string, entities: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}/Range`;

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.post(url, entities, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }
  //#endregion

  //#region Api requests "Put" :: Put(), PutRange()

  /**
   * @description Atualiza a entidade
   * @param entityName Nome da entidade
   * @param id Id da entidade que será atualizada
   * @param data Entidade que será atualizada
   * @returns Promise any
   */
  public async Put(entityName: string, id: number, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}/${id}`;

        let headers: {
          "Content-Type": "application/json"
        }
        this.httpClient.put(url, data, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }

  /**
   * @description Atualiza uma lista de entidades
   * @param entityName Nome da entidade
   * @param data Array de entidades para atualizar
   * @returns Promise any
   */
  public async PutRange(entityName: string, data: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();
        let url = `https://localhost:7083/${entityName}/Range`;
        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.put(url, data, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }
  //#endregion

  //#region Api request "Delete" :: Delete(), DeleteRange

  /**
   * @description Deleta uma entidade
   * @param entityName Nome da entidade
   * @param id Id da entidade
   * @param data Entidade que será deletada
   * @returns Promise any
   */
  public async Delete(entityName: string, id: number, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}/${id}`;

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.delete(url, { headers: headers, body: data }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }

  /**
   * @description Deleta uma lista de entidades
   * @param entityName Nome da entidade
   * @param data Array de entidades para deletar
   * @returns Promise any
   */
  public async DeleteRange(entityName: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/${entityName}/Range`;

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.delete(url, { headers: headers, body: data }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }
  //#endregion

  //#region Api custom requests 'Class' :: GetClassByUserId()

  /**
   * @description Retorna uma classe pelo Id do usuário
   * @param userId Id do usuário
   * @returns Promise any
   */
  public async GetClassByUserId(userId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url: string = `https://localhost:7083/Class/UserId/${userId}`;

        let headers: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: headers }).subscribe((result) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }

  //#endregion

  //#region Api custom requests 'User' :: GetUserByClassId(), GetUsersByClassIdAndIsTeacher(), GetUsersWithoutClass()

  /**
   * @description Retorna uma lista de usuários pelo Id da classe
   * @param classId Id da classe
   * @returns Promise any
   */
  public async GetUsersByClassId(classId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url: string = `https://localhost:7083/User/List/ByClass/${classId}`;

        let headers: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }

  /**
   * @description Retorna uma lista de usuários sem classe
   * @returns Promise any
   */
  public async GetUsersWithoutClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url: string = `https://localhost:7083/User/List/WithoutClass`;

        let headers: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }

  /**
   * @description Retorna uma lista de usuários da classe filtrados pelo valor de isTeacher
   * @param classId Id da classe
   * @param isTeacher Valor se é professor ou aluno
   * @returns Promise any
   */
  public async GetUsersByClassIdAndIsTeacher(classId: number, isTeacher: boolean): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url: string = `https://localhost:7083/User/List/ByClass/${classId}/${isTeacher}`;

        let headers: any = {
          "Content-Type": "application/json"
        };

        this.httpClient.get(url, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }
  //#endregion

  //#region Api custom requests 'UsersClasses' :: GetClassByUserId()

  /**
   * @description Retorna uma lista de UsersClasses por uma lista de ids de classes
   * @param classesIds Ids das classes
   * @returns Promise any
   */
  public async GetUsersClassesByClassesIds(classesIds: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/UsersClasses/List/ByClassesId`;

        let params = new HttpParams();
        classesIds.forEach((id: number) => {
          params = params.append("usersId", id.toString());
        })

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers, params: params }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }

  /**
   * @description Retorna uma lista de UsersClasses por uma lista de ids de usuários
   * @param usersIds Ids dos usuários
   * @returns Promise any
   */
  public async GetUsersClassesByUsersIds(usersIds: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/UsersClasses/List/ByUsersIds`;

        let params = new HttpParams();
        usersIds.forEach((id: number) => {
          params = params.append("usersId", id.toString());
        })

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers, params: params }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });
      }
      catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    });
  }

  //#endregion

  //#region Api custom requests 'Checkin' :: GetCheckinsByClass GetCheckinsByClassAndRegisterDateTime()
  public async GetCheckinsByClass(classId: number): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/Checkin/List/byClass/${classId}`;

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }


  public async GetCheckinsByClassAndRegisterDateTime(classId: number, registerDateTime: Date): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.ngxSpinnerService.show();

        this.ngxSpinnerService.show();

        let url = `https://localhost:7083/Checkin/List/byClass/${classId}/byRegisterDateTime`;

        let params: HttpParams = new HttpParams().set("registerDateTime", registerDateTime.toISOString());

        let headers: {
          "Content-Type": "application/json"
        }

        this.httpClient.get(url, { headers: headers, params: params }).subscribe((result: any) => {
          if (result) {
            this.ngxSpinnerService.hide();
            resolve(result);
          }
        });

      } catch (error) {
        console.log(error);
        this.ngxSpinnerService.hide();
        reject(error);
      }
    })
  }
  //#endregion
}
