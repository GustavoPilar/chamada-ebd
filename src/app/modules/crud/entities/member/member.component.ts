import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { CrudManager } from "../../base/crud-manager.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService, PrimeIcons } from "primeng/api";
import { DialogService, DynamicDialog, DynamicDialogRef } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { SpecialOption } from "../../../../models/crud/special-option";
import { BirthDateDialogComponent } from "./birth-date-dialog/birth-date-dialog.component";

@Component({
  selector: "app-Member",
  templateUrl: "./member.component.html",
  standalone: false,
  providers: [CrudManager]
})
export class MemberComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public classes!: any[];
  public showInformation: boolean = false;
  public classRoute!: string;

  public birthDateDialog!: DynamicDialogRef<BirthDateDialogComponent> | null;
  //#endregion

  //#region Constructor
  constructor(public override crudManager: CrudManager,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override dialogService: DialogService,
    protected override messageService: MessageService) {
    super(crudManager, apiService, formBuilder, dialogService, messageService);
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
      { field: "birthDate", label: "Data Nasc.", displayColumnType: DisplayColumnType.DATE },
      { field: "status", label: "Ativo", displayColumnType: DisplayColumnType.BOOLEAN },
      { field: "class.name", label: "Classe", displayColumnType: DisplayColumnType.OBJECT }
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Membro", "Membros", false);
  }

  public override getForm(): FormGroup {

    let birthDate: Date | null = new Date(this.selectedEntity?.birthDate);
    if (birthDate.toString() == "Invalid Date") {
      birthDate = null;
    }

    if (this.selectedEntity.class) {
      this.classRoute = `/manager/edit/class/${this.selectedEntity.class.id}`;
    }

    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      age: [
        this.selectedEntity?.age ?? 0
      ],
      birthDate: [
        birthDate
      ],
      status: [
        this.selectedEntity?.status ?? true,
        Validators.required
      ],
      class: [
        this.selectedEntity?.class ?? null
      ]
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
        buttonAction: () => this.openBirthDateDialog()
      }
    ]
  }

  public override prepareEntityToSave(): any {
    let entity = this.entityForm.value;

    if (entity.class == null) {
      let index: number = this.classes.findIndex((x: any) => x.name == "SEM CLASSE");
      entity.class = this.classes[index];
    }

    return entity;
  }
  //#endregion

  //#region OnChange
  public onChangeBirthDate(event: Date) {
    if (event == null) {
      this.entityForm.get('age')?.setValue(null);
      return;
    }

    let birthDate: Date = new Date(event);
    let age: number = this.currentDate.getFullYear() - birthDate.getFullYear();
    const m: number = this.currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && this.currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    this.entityForm.get('age')?.setValue(age);
  }

  public informationMessage(): void {
    if (!this.showInformation)
      this.showInformation = true;
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
  public openBirthDateDialog(): void {

    this.birthDateDialog = this.dialogService.open(BirthDateDialogComponent, {
      data: {
        entities: this.entities
      },
      header: "Aniversários",
      closable: true,
      closeOnEscape: false,
      draggable: false,
      styleClass: "w-11 h-full overflow-visible",
    });

    this.birthDateDialog?.onClose.subscribe((result) => {

    });
  }
  //#endregion
}
