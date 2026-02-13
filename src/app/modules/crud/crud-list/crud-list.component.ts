import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base";
import { Router } from "@angular/router";
import { DisplayColumnType } from "../../../models/crud/display-column-type";

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
    private router: Router
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

  public showDateValue(date?: string) {
    if (date == undefined) {
      return "--/--/--";
    }

    return new Date(date).toLocaleDateString();
  }
  //#endregion
}
