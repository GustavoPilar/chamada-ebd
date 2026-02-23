import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { CrudManager } from "../../base/crud-manager.service";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  standalone: false
})
export class classComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public classes!: any[];
  public validating: boolean = false;
  public severityName: "error" | "success"  = "error";
  //#endregion

  //#region Constructor
  constructor(public override crudManager: CrudManager,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override dialogService: DialogService) {
    super(crudManager, apiService, formBuilder, dialogService);
  }
  //#endregion

  //#region OnInit
  public override ngOnInit(): void {
    super.ngOnInit();
  }
  //#endregion

  //#region CrudBaseComponent Methods
  public override getDisplayColumns(): DisplayColumn[] {
    return [
      {
        field: "name", label: "Nome", displayColumnType: DisplayColumnType.TEXT
      }
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Classe", "Classes", false);
  }

  public override getForm(): FormGroup {
    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      validateName: [
        false,
        [
          Validators.required,
          Validators.requiredTrue
        ]
      ]
    });
  }

  public override loadResources(): Promise<any> {
    return Promise.all([
      this.loadClasses()
    ]);
  }
  //#endregion

  //#region utils
  public validateName(): void {
    this.validating = true;
    let name: string = this.entityForm.get("name")?.value;
    let classesName: string[] = this.classes.map((x: any) => x.name.toLocaleLowerCase());

    if (name == null || classesName.includes(name.toLocaleLowerCase())) {
      this.entityForm.get("name")?.setValue(null);
      this.validating = false;
      return
    }

    this.entityForm.get("validateName")?.setValue(true);
    this.validating = false;
  }

  public getDescriptionMessage(): string {
    let name: string = this.entityForm.get("name")?.value?.trim();
    let classesName: string[] = this.classes.map((x: any) => x.name.toLocaleLowerCase());

    if (name == null || name == "" || classesName.includes(name.toLocaleLowerCase())) {
      this.entityForm.get("validateName")?.setValue(false);
      this.severityName = "error";
      return "Nome inválido";
    }

    this.entityForm.get("validateName")?.setValue(true);
    this.severityName = "success";
    return `${name} é valido`;
  }
  //#endregion

  //#region Resources
  public loadClasses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("class").then((result: any) => {
          if (result) {
            this.classes = result;
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  //#endregion
}
