import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { Column } from "../models/column";
import { CrudManager } from "./crud-manager.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-crud-base",
  template: "",
  standalone: false,
  providers: [CrudManager]
})
export abstract class CrudBaseComponent implements OnInit {

  //#region Fields
  public entityName: string;
  public entityId: number;
  public selectedEntity: any;
  public entityForm: FormGroup;
  public entities: any[];

  public isForm: boolean = false;
  public isList: boolean = false;
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder
  ) {

  }
  //#endregion

  //#endregion OnInit && AfterViewInit
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
  //#endregion

  //#region Members :: initialize(), initForm(), canSave(), saveEntity(), deleteEntity()

  /**
   * @description Inicia o CrudManager e verifica se é formulário ou listagem
   * @returns Promise any
   */
  public initialize(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.crudManager.initialize(this);

        if (this.isForm) {
          this.initForm().then(result => {
            resolve(true);
          });
        }
        else if (this.isList) {
          this.initList().then(result => {
            resolve(true);
          })
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public initList(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.crudManager.loadEntities().then((result) => {
        if (result) {
          this.entities = result;
          resolve();
        }
      }, reject);
    })
  }

  /**
   * @description Carrega a entidade selecionada, e cria o formulário
   * @returns Promise any
   */
  public initForm(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadResources().then((result) => {
        this.crudManager.loadEntity().then((result) => {
          if (result) {
            this.selectedEntity = result;
            this.entityForm = this.createForm();
            resolve();
          }
        }, reject);
      }, reject)
    })
  }

  public loadResources(): Promise<any[]> {
    return Promise.all([]);
  }

  /**
   * @description Retorna valor boolean informando se o formulário é válido ou não
   * @returns boolean
   */
  public canSave(): boolean {
    return this.entityForm?.valid ?? false;
  }

  public saveEntity(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      try {
        let entity = this.entityForm.value;
        entity.id = this.selectedEntity.id;

        if (this.selectedEntity.id == 0) {
          this.crudManager.saveEntity(entity).then((result: any) => {
            if (result) {
              resolve(result);
            }
          })
        }
        else {
          this.crudManager.updateEntity(this.selectedEntity.id, entity).then((result: any) => {
            if (result) {
              resolve(result);
            }
          });
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Deleta a entidade
   * @param id Id da entidade
   * @param entity entidade
   * @returns Promise any
   */
  public deleteEntity(id: number, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.crudManager.deleteEntity(id, entity).then((result: any) => {
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

  public deleteEntityByList(id: number, entity: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.crudManager.deleteEntity(id, entity).then((result: any) => {
          if (result) {
            this.crudManager.loadEntities().then((entities: any) => {
              if (entities) {
                this.entities = entities;
                resolve(this.entities);
              }
            });
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion

  //#region Members Abstracts
  /**
   * @description Retorna as colunas para a listagem
   * @abstract
   * @returns Column[]
   */
  abstract GetColumns(): Column[];

  /**
   * @description Cria o formulário
   * @abstract
   * @returns FormGroup
   */
  abstract createForm(): FormGroup;
  //#endregion
}
