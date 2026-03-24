import { MessageService, PrimeIcons } from 'primeng/api';
import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Member } from "../../../../models/entities";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/utils/display-column";
import { DisplayColumnTypeEnum } from "../../../../models/utils/display-column-type";
import { DescriptionType } from "../../../../models/utils/description-type";
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BirthDateDialogComponent } from './birth-date-dialog/birth-date-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SpecialOption } from '../../../../models/utils/special-option';

@Component({
  selector: "app-member",
  standalone: false,
  templateUrl: "./member.component.html"
})
export class MemberComponent extends CrudBaseComponent<Member> implements OnInit {

  //#region fields
  public birthDateDialog!: DynamicDialogRef<BirthDateDialogComponent> | null;
  //#endregion

  //#region Constructor
  constructor(@Inject(ApiService) protected override apiService: ApiService,
    protected override cdr: ChangeDetectorRef,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override loaderService: NgxSpinnerService,
    protected override dialogService: DialogService
  ) {
    super(apiService, cdr, formBuilder, messageService, loaderService, dialogService);
  }
  //#endregion

  //#endregion Fields

  //#endregion

  //#region OnInit
  public override ngOnInit(): void {

  }
  //#endregion

  //#region CrudBaseComponent
  public override getEntityName(): string {
    return "member";
  }

  public override getEntityDescription(): DescriptionType {
    return { singular: "Membro", plural: "Membros", isFamale: false };
  }

  public override getDisplayColumns(): DisplayColumn[] {
    return [
      { field: "name", label: "Nome", type: DisplayColumnTypeEnum.TEXT },
      { field: "birthDate", label: "Data de nasc.", type: DisplayColumnTypeEnum.DATE },
      { field: "age", label: "Idade.", type: DisplayColumnTypeEnum.NUMERIC },
      { field: "isActive", label: "Status", type: DisplayColumnTypeEnum.BOOLEAN },
      { field: "isMale", label: "Gênero", type: DisplayColumnTypeEnum.BOOLEAN }
    ];
  }

  public override getColumnValue(entity: Member, column: DisplayColumn): string {
    switch (column.type) {
      case DisplayColumnTypeEnum.TEXT:
        return entity.name;
      case DisplayColumnTypeEnum.NUMERIC:
        return entity.age?.toString() ?? "-"
      case DisplayColumnTypeEnum.BOOLEAN:
        if (column.field == "isMale") {
          return entity.isMale ? "Homem" : "Mulher"
        }

        return entity.isActive ? "Ativo" : "Inativo";
      case DisplayColumnTypeEnum.DATE:
        if (entity.birthDate != null) {
          return new Date(Date.parse(entity.birthDate.toString())).toLocaleDateString();
        }
    }

    return "-";
  }

  public override getTagBackground(result: boolean, field: string): string {
    if (field == "isMale") {
      return result ? "bg-green-200 text-green-600" : "bg-purple-200 text-purple-600";
    }

    return super.getTagBackground(result, field);
  }

  public override createForm(): FormGroup {
    let date: Date | null = null;

    if (this.selectedEntity.birthDate != null)
      date = new Date(Date.parse(this.selectedEntity.birthDate.toString()));

    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      isActive: [
        this.selectedEntity?.isActive ?? false,
        Validators.required
      ],
      isMale: [
        this.selectedEntity?.isMale ?? true,
        Validators.required
      ],
      birthDate: [
        date
      ],
      age: [
        this.selectedEntity?.age ?? null
      ]
    });
  }

  public onChangeBirthDate(event: Date): void {
    let birthDate: Date = event
    let age: number = this.currentDate.getFullYear() - birthDate.getFullYear();
    const m: number = this.currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && this.currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    this.form.get('age')?.setValue(age);
  }

  public onClearBirthDate(): void {
    this.form.get("age")?.setValue(null);
  }

  public override prepareEntityToSave(): Member {
    let entity = this.form.value;
    entity.id = this.selectedEntity.id;

    return entity;
  }

  public override createSpecialOptions(): SpecialOption[] {
    return [
      { command: () => { this.openBirthDateDialog() }, icon: PrimeIcons.GIFT, severity: "info" }
    ]
  }

  //#endregion

  //#region OpenDialog

  public openBirthDateDialog(): void {
    this.birthDateDialog = this.dialogService.open(BirthDateDialogComponent, {
      data: {
        members: this.entities.filter((x: Member) => x.isActive && x.birthDate != null)
      },
      header: "Aniversários",
      styleClass: "w-11 h-full",
      closable: true,
      draggable: false
    });
  }

  //#endregion

  //#region Version 2

  public override getDisplayColumnsPanel(): DisplayColumn[] {
    return [
      { field: "birthDate", label: "Data de nasc.", type: DisplayColumnTypeEnum.DATE },
      { field: "age", label: "Idade.", type: DisplayColumnTypeEnum.NUMERIC, styleClass: "hidden md:block" },
      { field: "isActive", label: "Status", type: DisplayColumnTypeEnum.BOOLEAN },
      { field: "isMale", label: "Gênero", type: DisplayColumnTypeEnum.BOOLEAN }
    ];
  }

  public override getPanelTitle(entity: any): string {
    return entity.name;
  }

  public override getTagValue(entity: Member, field: string): string {
    if (field == "isMale")
      return entity.isMale ? "bg-green-200 text-green-600" : "bg-purple-200 text-purple-600"

    return super.getTagValue(entity, field);
  }

  //#endregion

}
