import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { CrudManager } from "../../base/crud-manager.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";

@Component({
  selector: "app-Member",
  template: "",
  standalone: false,
  providers: [CrudManager]
})
export class MemberComponent extends CrudBaseComponent implements OnInit {

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
      { field: "name", label: "Nome", displayColumnType: DisplayColumnType.TEXT },
      { field: "age", label: "Idade", displayColumnType: DisplayColumnType.NUMERIC },
      { field: "birthday", label: "Data Nasc.", displayColumnType: DisplayColumnType.DATE },
      { field: "status", label: "Ativo", displayColumnType: DisplayColumnType.BOOLEAN },
      { field: "class", label: "Classe", displayColumnType: DisplayColumnType.TEXT }
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Membro", "Membros", false);
  }

  public override getForm(): FormGroup {
    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      phone: [
        this.selectedEntity?.phone ?? null
      ],
      age: [
        this.selectedEntity?.age ?? 18,
        Validators.required
      ],
      sex: [
        this.selectedEntity?.sex ?? "M",
        Validators.required
      ],
      maritalStatus: [
        this.selectedEntity?.maritalStatusId ?? 0,
        Validators.required
      ],
      hasChildren: [
        this.selectedEntity?.hasChildren ?? false,
        Validators.required
      ],
      childrenCount: [
        this.selectedEntity?.childrenCount ?? 0
      ],
      active: [
        this.selectedEntity?.active ?? false,
        Validators.required
      ]
    })
  }

  public override loadResources(): Promise<any> {
    return Promise.all([]);
  }
  //#endregion


  //#region Resources
  //#endregion
}
