import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { SpecialOption } from "../../../../models/crud/special-option";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { CrudManager } from "../../base/crud-manager.service";
import { BirthdayDialogComponent } from "../member/birthday-dialog/birthday-dialog.component";

@Component({
  selector: "app-weeding-date",
  templateUrl: "./weedingDate.component.html",
  standalone: false
})
export class WeedingDateComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public members!: any[];
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
      { field: "husband.name", label: "Esposo", displayColumnType: DisplayColumnType.OBJECT },
      { field: "wife.name", label: "Esposa", displayColumnType: DisplayColumnType.OBJECT },
      { field: "weedingDateTime", label: "Data de casamento", displayColumnType: DisplayColumnType.DATE },
      { field: "totalTime", label: "Tempo total", displayColumnType: DisplayColumnType.NUMERIC },
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Aniversário de casamento", "Aniversários de casamentos", false);
  }

  public override getForm(): FormGroup {

    let weedingDateTime: Date = new Date(this.selectedEntity?.weedingDateTime);
    if (weedingDateTime.toString() == "Invalid Date") {
      weedingDateTime = new Date();
    }

    console.log(this.selectedEntity);
    return this.formBuilder.group({
      husband: [
        this.selectedEntity?.husband ?? null,
        Validators.required
      ],
      wife: [
        this.selectedEntity?.wife ?? null,
        Validators.required
      ],
      weedingDateTime: [
        weedingDateTime
      ],
      totalTime: [
        this.selectedEntity?.totalTime ?? null,
      ]
    })
  }

  public override loadResources(): Promise<any> {
    return Promise.all([
      this.loadMembers()
    ]);
  }
  //#endregion

  //#region OnChange
  public onChangeWeedingDate(event: Date) {
    if (event == null) {
      this.entityForm.get('totalTime')?.setValue(null);
      return;
    }

    let currentYear: number = this.currentDate.getFullYear();
    let selectedeYear: number = event.getFullYear();
    let totalTime: number = currentYear - selectedeYear;



    this.entityForm.get('totalTime')?.setValue(totalTime);
  }
  //#endregion

  //#region Resources
  public loadMembers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("member").then((result: any) => {
          if (result) {
            this.members = result;
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
