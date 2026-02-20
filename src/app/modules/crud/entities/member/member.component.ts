import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { CrudManager } from "../../base/crud-manager.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { DialogService, DynamicDialog, DynamicDialogRef } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { SpecialOption } from "../../../../models/crud/special-option";
import { BirthdayDialogComponent } from "./birthday-dialog/birthday-dialog.component";

@Component({
  selector: "app-Member",
  templateUrl: "./member.component.html",
  standalone: false,
  providers: [CrudManager]
})
export class MemberComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public classes!: any[];

  public birthdayDialog!: DynamicDialogRef<BirthdayDialogComponent> | null;
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
      { field: "class.name", label: "Classe", displayColumnType: DisplayColumnType.OBJECT }
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Membro", "Membros", false);
  }

  public override getForm(): FormGroup {

    let birthday: Date = new Date(this.selectedEntity?.birthday);
    if (birthday.toString() == "Invalid Date") {
      birthday = new Date();
    }

    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      age: [
        this.selectedEntity?.age ?? 0
      ],
      birthday: [
        birthday
      ],
      status: [
        this.selectedEntity?.status ?? true,
        Validators.required
      ],
      class: [
        this.selectedEntity?.class ?? null,
        Validators.required
      ],
    })
  }

  public override loadResources(): Promise<any> {
    return Promise.all([
      this.loadClasses()
    ]);
  }

  public override getSpecialOptions(): SpecialOption[] {
    return [
      {
        buttonIcon: PrimeIcons.GIFT,
        buttonAction: () => this.openBirthdayDialog()
      }
    ]
  }
  //#endregion

  //#region OnChange
  public onChangeBirthday(event: Date) {
    if (event == null) {
      this.entityForm.get('age')?.setValue(0);
      return;
    }

    let currentYear: number = this.currentDate.getFullYear();
    let selectedeYear: number = event.getFullYear();
    let age: number = currentYear - selectedeYear;



    this.entityForm.get('age')?.setValue(age);
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
    })
  }
  //#endregion

  //#region Dynamic Dialog
  public openBirthdayDialog(): void {

    this.birthdayDialog = this.dialogService.open(BirthdayDialogComponent, {
      data: {
        entities: this.entities
      },
      header: "Aniversários",
      closable: true,
      closeOnEscape: false,
      draggable: false,
      styleClass: "w-11 h-full overflow-visible",
    });

    this.birthdayDialog?.onClose.subscribe((result) => {

    });
  }
  //#endregion
}
