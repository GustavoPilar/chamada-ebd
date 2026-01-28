import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { Column } from "../models/column";
import { CrudManager } from "./crud-manager.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PrimeIcons } from "primeng/api";

export class TypeDescription {
  singleDescription: string;
  pluralDescription: string;
  isFamale: boolean;
  entityDescription?: string;

  constructor(singleDescription: string, pluralDescription: string, isFamale: boolean, entityDescription: string) {
    this.singleDescription = singleDescription;
    this.pluralDescription = pluralDescription;
    this.isFamale = isFamale;
    this.entityDescription = entityDescription;
  }
}

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

  public typeDescription: TypeDescription;

  public isForm: boolean = false;
  public isList: boolean = false;

  public onIcon: string = PrimeIcons.CHECK;
  public offIcon: string = PrimeIcons.TIMES;

  public dynamicDialogRef: DynamicDialogRef | undefined;
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder,
    protected viewContainerRef: ViewContainerRef,
    protected dialogService: DialogService
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
            this.typeDescription = this.getTypeDescription();
            resolve(true);
          });
        }
        else if (this.isList) {
          this.initList().then(result => {
            this.typeDescription = this.getTypeDescription();
            resolve(true);
          })
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Inicia a lista de entidades
   * @returns Promise any
   */
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

  /**
   * @description Carrega os recursos necessários antes de iniciar o formulário
   * @returns Promise any[]
   */
  public loadResources(): Promise<any[]> {
    return Promise.all([]);
  }

  /**
   * @description Retorna a descrição para o formulário
   * @returns string
   */
  public getFormDescription(): string {
    if (this.entityId) {
      return this.typeDescription.singleDescription + " - " + this.typeDescription.entityDescription;
    }

    let description: string = this.typeDescription.isFamale ? "Nova " : "Novo ";
    return description + this.typeDescription.singleDescription;
  }

  /**
   * @description Retorna valor boolean informando se o formulário é válido ou não
   * @returns boolean
   */
  public canSave(): boolean {
    return this.entityForm?.valid ?? false;
  }

  /**
   * @description Prepara a entidade para ser salva. Método pode ser sobreescrito.
   * @returns any
   */
  public prepareEntityToSave(): any {
    return this.entityForm.value;
  }

  /**
   * @description Salva a entidade
   * @returns Promise any
   */
  public saveEntity(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      try {
        let entity = this.prepareEntityToSave();
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

  /**
   * @description Deleta a entidade pela listagem
   * @param id Id da entidade
   * @param entity Entidade
   * @returns Promise any
   */
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

  /**
   * @description Retorna tipo da descrição da entidade
   * @returns TypeDescription
   */
  abstract getTypeDescription(): TypeDescription;

  //#endregion
}
