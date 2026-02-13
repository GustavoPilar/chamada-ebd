import { AfterViewInit, Component, OnInit } from "@angular/core";
import { DisplayColumn } from "../../../models/crud/display-column";
import { TypeDescription } from "../../../models/crud/type-description";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { CrudManager } from "./crud-manager.service";
import { SpecialOption } from "../../../models/crud/special-option";
import { DialogService } from "primeng/dynamicdialog";
import { ApiService } from "../../../services/api-service/api.service";

@Component({
  selector: "app-crud-base",
  template: "",
  standalone: false,
  providers: [CrudManager]
})
export abstract class CrudBaseComponent implements OnInit, AfterViewInit {

  //#region Fields
  public entityName!: string;
  public entityId!: number;

  public selectedEntity!: any;
  public entities!: any[];

  public isForm: boolean = false;
  public isList: boolean = false;

  public entityForm!: FormGroup;

  public currentDate: Date = new Date();
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder,
    protected dialogService: DialogService) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
  }
  //#endregion

  //#region init Methods :: initList()
  public initList(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      try {
        this.crudManager.initialize(this);
        this.crudManager.getEntities().then((result: any) => {
          this.entities = result;
          resolve(result);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public initForm(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.crudManager.initialize(this);
        this.loadResources().then((result) => {
          if (result) {
            this.crudManager.getEntityById().then((entity: any) => {
              if (entity) {
                this.selectedEntity = entity;
                this.entityForm = this.getForm();
                resolve(entity);
              }
            });
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  //#endregion

  //#region abstract Methods
  abstract getDisplayColumns(): DisplayColumn[];
  abstract getTypeDescription(): TypeDescription;
  abstract getForm(): FormGroup;
  //#endregion

  //#region Methods
  public loadResources(): Promise<any> {
    return Promise.all([]);
  }

  public canSave(): boolean {
    return this.entityForm?.valid ?? false;
  }

  public getField(field: string): AbstractControl {
    return this.entityForm.get(field) as AbstractControl;
  }

  public getSpecialOptions(): SpecialOption[] {
    return [];
  }
  //#endregion
}
