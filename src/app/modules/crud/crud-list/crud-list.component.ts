import { DisplayColumnType } from './../../../models/crud/display-column-type';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-crud-list",
  templateUrl: "./crud-list.component.html",
  standalone: false
})
export class CrudListComponent implements OnInit, AfterViewInit {

  //#region Fields
  public entityName!: string;
  public crudBaseComponent!: CrudBaseComponent;

  public refresh: boolean = false;
  //#endregion

  //#region Constructor
  constructor(
    private viewRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
  //#endregion

  //#region Methods
  public async loadComponent() {
    const module = await import(`../entities/${this.entityName}/${this.entityName}.component.ts`);
    const componentName: string = Object.keys(module)[0];
    const createdComponent = this.viewRef.createComponent(module[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    if (this.crudBaseComponent) {
      this.crudBaseComponent.entityName = this.entityName;
      this.crudBaseComponent.isList = true;
      this.crudBaseComponent.initList().then((result: any[]) => {
        if (result) {
          this.getRefresh();
        }
      });
    }
  }

  public getRefresh(): void {
    this.changeDetectorRef.detectChanges();
  }

  public openEdit(entityId: number): void {
    this.router.navigate(["/manager/edit/", this.entityName, entityId]);
  }

  public openNew(): void {
    this.router.navigate(["/manager/new/", this.entityName]);
  }

  public showObejctValue(entity: any, columnField: string): any {
    let fields: string[] = columnField.split(".");
    let currentValue: any = entity;

    fields.forEach((field: string) => {
      currentValue = currentValue[field];
    });

    return currentValue;
  }

  public showDefaultValue(value?: string): any {
    if (value == undefined) return this.showEmptyValue();

    return value;
  }

  public showDateValue(date?: string) {
    if (date == undefined) {
      return this.showEmptyValue();
    }

    return new Date(date!).toLocaleDateString();
  }

  public showEmptyValue(): string {
    return "-"
  }

  public deleteEntities(): void {
    if (this.crudBaseComponent.entities.length <= 1 || this.crudBaseComponent.selectedEntities.length == this.crudBaseComponent.entities.length) {
      this.messageService.add({
        summary: "Erro ao excluir",
        detail: "Deixe apenas um registro, então edite-o",
        life: 3000,
        closable: true,
        severity: "error",
      });

      return; 
    }

    this.confirmationService.confirm({
      header: "Confirmar exclusão",
      icon: PrimeIcons.QUESTION_CIRCLE,
      message: "Deseja mesmo excluir os registros selecionados?",
      accept: () => {
        this.crudBaseComponent.deleteEntities().then((result: any) => {
          if (result) {
            this.getRefresh();
          }
        }, (error) => {
          console.log(error);
          this.messageService.add({
            summary: "Erro ao excluir",
            detail: "Ocorreu um erro durante a exclusão do(s) registro(s)",
            life: 3000,
            closable: true,
            severity: "error"
          })
        });
      }
    });
  }

  public getColumnType(displayColumnType: DisplayColumnType): string {
    let type: string = "";

    switch(displayColumnType) {
      case DisplayColumnType.NUMERIC:
        type = "numeric"
        break;
      case DisplayColumnType.BOOLEAN:
        type = "boolean";
        break;
      case DisplayColumnType.DATE:
        type = "date";
        break;
      default:
        type = "text"
    }

    return type;
  }
  //#endregion
}
