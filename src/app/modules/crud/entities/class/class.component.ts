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
export class ClassComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
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
        field: "name", label: "Nome", displayColumnType: DisplayColumnType.TEXT,
      },
      {
        field: "description", label: "Descrição", displayColumnType: DisplayColumnType.TEXT,
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
      description: [
        this.selectedEntity?.description ?? null,
        Validators.required
      ]
    });
  }
  //#endregion

  //#region Resources
  //#endregion
}
