import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ChangeDetectorRef, Component, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { CrudManager } from "../base/crud-manager.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../../services/communication/api.service";
import { ColumnType } from "../models/column-type";

@Component({
  selector: "app-crud-list",
  templateUrl: "./crud-list.component.html",
  styleUrl: "./crud-list.component.css",
  standalone: false,
  providers: [CrudManager]
})
export class CrudListComponent {

  //#region Fields
  public entityName: string;

  public crudBaseComponent: CrudBaseComponent;

  public canShow: boolean = false;
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }
  //#endregion

  //#region OnInit && AfterViewInit
  async ngOnInit(): Promise<any> {
  }

  ngAfterViewInit(): void {

  }

  //#region Members :: Initialize(), checkBooleanType(), OpenNew(), editEntity(), confirmationDelete()

  /**
   * @description Inicializa as variáveis e inicia o crudBaseComponent
   * @returns Promise void
   */
  public async initialize(): Promise<void> {
    const importedModule = await import("../entities/" + this.entityName + "/" + this.entityName + ".component.ts");
    const componentName: string = Object.keys(importedModule)[0];
    const createdCompoonent = this.viewRef.createComponent(importedModule[componentName]);

    this.crudBaseComponent = createdCompoonent.instance as CrudBaseComponent;

    this.crudBaseComponent.entityName = this.entityName;
    this.crudBaseComponent.isList = true;
    this.loadEntities();
  }

  /**
   * @description Carreaga as entidades da lista
   * @returns Promise any
   */
  public loadEntities(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.crudBaseComponent.initialize().then((result: any) => {
          this.canShow = true;
          this.changeDetectorRef.detectChanges();
          resolve(result);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  /**
   * @description Checa se o tipo da coluna é booleana
   * @param type Tipo da coluna
   * @returns boolean
   */
  public checkBooleanType(type: ColumnType): boolean {
    return type == ColumnType.BOOLEAN;
  }

  /**
   * @description Checa se o tipo da coluna é data
   * @param type Tipo da coluna
   * @returns boolean
   */
  public checkDateType(type: ColumnType): boolean {
    return type == ColumnType.DATE;
  }

  public getTimeByString(date: string): string {
    return date.substring(11);
  }

  /**
   * @description Navega até o formulário para inserção
   * @returns void
   */
  public openNew(): void {
    this.router.navigate(["/manager/new/", this.entityName]);
  }

  /**
   * @description Edita a entidade
   * @param entity Entidade
   * @returns void
   */
  public editEntity(entity: any): void {
    this.router.navigate(["/manager/edit/", this.entityName, entity.id]);
  }

  /**
   * @description Faz a confirmação para a exclusão da entidade
   * @param entity Entidade
   * @returns void
   */
  public confirmationDelete(entity: any): void {
    this.confirmationService.confirm({
      header: "Confirmar exclusão",
      message: `Deseja excluir o item ${entity.code}`,
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => {
        this.crudBaseComponent.deleteEntityByList(entity.id, entity).then((result: any) => {
          if (result) {
            this.changeDetectorRef.detectChanges();
            this.messageService.add({
              summary: "Registro deletado",
              severity: "success",
              detail: `A entidade ${entity.code} foi excluída com sucesso.`,
              life: 3000
            });

          }
        })
      }
    });
  }

}
