import { ChangeDetectorRef, Component, Inject, inject, Input, OnInit } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { EntityBase } from "../../../models/base/entity-base";
import { DisplayColumn } from "../../../models/utils/display-column";
import { forkJoin, Observable, Observer, of, Subject, switchMap } from "rxjs";
import { DescriptionType } from "../../../models/utils/description-type";
import { MessageService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { DialogService } from "primeng/dynamicdialog";
import { SpecialOption } from "../../../models/utils/special-option";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: ""
})
export abstract class CrudBaseComponent<T = EntityBase> implements OnInit {

  //#region Fields

  /** Nome da entidade */
  @Input() public entityName!: string;

  /** Id da entidade */
  @Input() public entityId!: number;


  /** Entidades */
  public entities!: T[];

  /** Entidade selecionada */
  public selectedEntity!: T;


  /** Subject para quando as entidades forem carregadas */
  public readonly entitiesLoaded$ = new Subject<T[]>();

  /** Subject para quando a entiadade for selecionada */
  public readonly selectedEntity$ = new Subject<T>();

  /** Subject para  quando a entide for enviada para o servidor */
  public readonly createdEntity$ = new Subject<T>();


  /** É formulário? */
  public isForm: boolean = false;
  /** É listagem */
  public islist: boolean = false;

  /** Formulário */
  public form!: FormGroup;


  /** Data atual */
  public currentDate: Date = new Date();
  public isValid: boolean = true;

  //#endregion

  //#region Constructor
  constructor(
    @Inject(ApiService) protected apiService: ApiService,
    protected cdr: ChangeDetectorRef,
    protected formBuilder: FormBuilder,
    protected messageService: MessageService,
    protected loaderService: NgxSpinnerService,
    protected dialogService: DialogService
  ) {
  }
  //#endregion

  //#region OnInit()
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  /** Inicia as configurações para listagem */
  public initList(): void {
    this.islist = true;
    this.getEntities();
  }

  /** Inicia as configurações para o formulário */
  public initForm(): void {
    this.isForm = true;
    this.getEntityById();
  }

  /** Carrega uma lista de entidades */
  public getEntities(): void {
    this.loaderService.show();
    this.apiService.getEntities<T>(this.entityName).subscribe({
      next: (result) => {
        this.entities = result;
        this.entitiesLoaded$.next(result);
      },
      error: (error) => {
        console.log(error);
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  /** Carrega uma entidade */
  public getEntityById(): void {
    this.loaderService.show();

    this.apiService.getEntityById<T>(this.entityName, this.entityId).pipe(
      switchMap((result: T) => {
        this.selectedEntity = result,
          this.form = this.createForm();
        return this.loadResources();
      })
    ).subscribe({
      next: () => {
        this.selectedEntity$.next(this.selectedEntity);
      },
      error: (error) => {
        console.log(error);
        this.messageService.add({
          summary: "Erro.",
          detail: "Algo ocorreu durante o salvamento",
          severity: "error",
          life: 3000,
          closable: true
        })
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  /** Envia a entidade nova para o servidor */
  public createEntity(): void {
    this.loaderService.show();

    let entityToSave: T = this.prepareEntityToSave();

    this.apiService.createEntity(this.entityName, entityToSave).subscribe({
      next: (result) => {
        this.createdEntity$.next(result);
      },
      error: (error) => {
        console.log(error);
        this.loaderService.hide()
      },
      complete: () => { this.loaderService.hide() }
    })
  }

  /** envia a entidade existente e atualizada para o servidor */
  public updateEntity(): void {
    this.loaderService.show();

    let entityToSave: T = this.prepareEntityToSave();

    this.apiService.updateEntity(this.entityName, this.entityId, entityToSave).subscribe({
      next: (result) => {
        this.createdEntity$.next(result);
      },
      error: (error) => {
        console.log(error);
        this.loaderService.hide()
      },
      complete: () => { this.loaderService.hide() }
    })
  }

  /** Deleta a entidade existente */
  public deleteEntity(id: number): void {
    this.loaderService.show();

    this.apiService.deleteEntity<T>(this.entityName, id).subscribe({
      next: (result) => {
        this.getEntities();
      },
      error: (error) => {
        this.messageService.add({
          summary: "Erro!",
          detail: "Erro ao deletar o registro.",
          severity: "error",
          life: 3000,
          closable: true
        });

        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  /** Carrega os recursos necessários (opcional) */
  public loadResources(): Observable<any> {
    return of(null);
  }

  /**
   * Retorna a descrição da entidade
   * @abstract
   * @returns Um objeto DescriptionType
   */
  abstract getEntityDescription(): DescriptionType;

  public abstract getDescription(entity: T): string;

  /** Retorna o nome da entidade */
  abstract getEntityName(): string;

  /**
   * Retorna as colunas da tabela para a listagem
   * @abstract
   * @returns Um array de DisplayColumn
   */
  abstract getDisplayColumns(): DisplayColumn[];

  /**
   * Retorna o valor/resultado da coluna/campo da tabela
   * @abstract
   * @returns Valor em string
   */
  abstract getColumnValue(entity: T, column: DisplayColumn): string;

  /**
   * Cria o formulário
   * @abstract
   * @returns Um grupo de formulário
   */
  abstract createForm(): FormGroup;

  /**
   * Retorna a entidade para o salvamento
   * @abstract
   * @returns T => Entidade
   */
  abstract prepareEntityToSave(): T;

  /**
   * Retorna um background para a tag da listagem.
   * Default:
   * @true => Azul
   * @false => Vermelhor
   * @returns Uma classe de estilização
   */
  public getTagBackground(entity: T, field: string): string {
    let e: any = entity;
    return e[field] ? 'bg-green-200 text-green-600' : "bg-red-200 text-red-600";
  }

  /** Retorna um Controle Abstrato do formulário
   * @params field => Campo do formulário
   * @returns AbstractControl
   */
  public getField(field: string): AbstractControl {
    return this.form.get(field) as AbstractControl;
  }

  public createSpecialOptions(): SpecialOption[] {
    return [];
  }

  //#endregion

}
