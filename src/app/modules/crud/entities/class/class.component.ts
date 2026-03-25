import { MessageService } from 'primeng/api';
import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Attendance, Class, ClassRoll, Member, WeddingDate } from "../../../../models/entities";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/utils/display-column";
import { DisplayColumnTypeEnum } from "../../../../models/utils/display-column-type";
import { DescriptionType } from "../../../../models/utils/description-type";
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, tap } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClassRollDialogComponent } from './class-roll-dialog/class-roll-dialog..component';
import { TransferClassDialogComponent } from './transfer-class-dialog/transfer-class-dialog.component';

@Component({
  selector: "app-class",
  standalone: false,
  templateUrl: "./class.component.html"
})
export class ClassComponent extends CrudBaseComponent<Class> implements OnInit {

  //#region fields
  public override isValid: boolean = false;

  public classes!: string[];
  public classRolls!: ClassRoll[];

  public classRollDialog!: DynamicDialogRef<ClassRollDialogComponent> | null;
  public transferClassDialog!: DynamicDialogRef<TransferClassDialogComponent> | null;
  //#endregion

  //#region Constructor
  constructor(protected override apiService: ApiService,
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
    return "class";
  }

  public override getDescription(entity: Class): string {
    return entity.name;
  }

  public override getEntityDescription(): DescriptionType {
    return { singular: "Classe", plural: "Classes", isFamale: true };
  }

  public override getDisplayColumns(): DisplayColumn[] {
    return [
      { field: "name", label: "Nome", type: DisplayColumnTypeEnum.TEXT, styleClass: "hidden md:block" },
      { field: "description", label: "Descrição", type: DisplayColumnTypeEnum.TEXT },
      { field: "startDate", label: "Data de início", type: DisplayColumnTypeEnum.DATE, styleClass: "hidden md:block" },
      { field: "endDate", label: "Data de término", type: DisplayColumnTypeEnum.DATE, styleClass: "hidden md:block" }
    ];
  }

  public override getColumnValue(entity: Class, column: DisplayColumn): string {
    switch (column.type) {
      case DisplayColumnTypeEnum.TEXT:
        if (column.field == "name")
          return entity.name;
        if (column.field == "description")
          return entity.description;
        break;
      case DisplayColumnTypeEnum.DATE:
        if (entity.startDate != null) {
          return new Date(Date.parse(entity.startDate.toString())).toLocaleDateString();
        }
    }

    return "-";
  }

  public override createForm(): FormGroup {
    let startDate: Date | null = null;

    if (this.selectedEntity.startDate != null)
      startDate = new Date(Date.parse(this.selectedEntity.startDate.toString()));

    let endDate: Date | null = null;

    if (this.selectedEntity.endDate != null)
      endDate = new Date(Date.parse(this.selectedEntity.endDate.toString()));

    return this.formBuilder.group({
      name: [
        this.selectedEntity?.name ?? null,
        Validators.required
      ],
      description: [
        this.selectedEntity?.description ?? null,
        Validators.required
      ],
      startDate: [
        startDate,
        Validators.required
      ],
      endDate: [
        endDate,
        Validators.required
      ]
    });
  }

  public override prepareEntityToSave(): Class {
    let entity = this.form.value;
    entity.id = this.selectedEntity.id;

    return entity;
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      classes: this.apiService.getEntities<Class>("class"),
      classRoll: this.apiService.getEntities<ClassRoll>(`classroll/${this.selectedEntity?.name ?? "Sem classe"}`)
    }).pipe(
      tap(({ classes, classRoll }) => {
        this.classes = classes.map(x => x.name.toLowerCase());
        this.classRolls = classRoll;
        this.cdr.detectChanges();
      })
    );
  }

  public change(): void {

    if (this.selectedEntity.id > 0) {
      this.isValid = true;
      return;
    }

    let className: string = this.form.get('name')?.value.trim().toLowerCase();
    if (className == "" || className == null || this.classes.includes(className)) {
      this.isValid = false;
    }
    else{
      this.isValid = true;
    }
  }
  //#endregion

  //#region class roll methods

  public openClassRollDialog(): void {
    this.classRollDialog = this.dialogService.open(ClassRollDialogComponent, {
      data: {
        className: this.selectedEntity.name
      },
      header: "Adicionar aluno sem classe",
      draggable: false,
      closable: true,
      styleClass: "w-11 h-full"
    })

    this.classRollDialog?.onClose.subscribe({
      next: (result) => {
        this.loaderService.show();
        this.loadResources();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          summary: "Erro",
          detail: "Erro ao tentar carregar os recursos",
          closable: true,
          severity: "error"
        });

        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  public openTransferClassDialog(classRoll: ClassRoll): void {
    this.transferClassDialog = this.dialogService.open(TransferClassDialogComponent, {
      data: {
        originClass: this.selectedEntity,
        classRoll: classRoll
      },
      header: "Adicionar aluno sem classe",
      draggable: false,
      closable: true,
      styleClass: "w-11 h-full"
    })

    this.transferClassDialog?.onClose.subscribe({
      next: (result) => {
        console.log(result);
        this.loaderService.show();
        this.loadResources();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          summary: "Erro",
          detail: "Erro ao tentar carregar os recursos",
          closable: true,
          severity: "error"
        });

        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  public getAttendance(attendances: Attendance[]): number {
    if (attendances != null) return attendances.filter(x => x.isPresent && x.isPresent == true).length;

    return 0;
  }

  //#endregion

}
