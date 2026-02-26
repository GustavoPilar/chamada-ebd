import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService, DynamicDialog, DynamicDialogRef } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { CrudManager } from "../../base/crud-manager.service";
import { MessageService, PrimeIcons } from "primeng/api";
import { TransferClassDialogComponent } from "./transfer-class-dialog/transfer-class-dialog.component";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  standalone: false
})
export class ClassComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public students!: any[];
  public studentColumns!: DisplayColumn[];

  public teachers!: any[];
  public teacherColumns!: DisplayColumn[];

  public members!: any[];
  public columns!: DisplayColumn[];

  public transferClassDialog!: DynamicDialogRef<TransferClassDialogComponent> | null;
  public isTeacher!: boolean;
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
    this.intializeColumns();

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

  public override loadResources(): Promise<any> {
    return Promise.all([
      this.loadMembersByClass(),
      this.loadTeacherByClass()
    ]);
  }
  //#endregion

  //#region Resources
  public loadMembersByClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        if (this.entityId == 0) {
          resolve([]);
        }
        else {
          this.apiService.getEntities(`member/byClass/${this.entityId}`).then((result: any) => {
            if (result) {
              this.students = result;
              this.members = result;
              resolve(result);
            }
          }, (error: any) => {
            console.log(error);
            reject(error);
          })
        }
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public loadTeacherByClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        if (this.entityId == 0) {
          resolve([]);
        }
        else {
          this.apiService.getEntities(`teacher/byClass/${this.entityId}`).then((result: any) => {
            if (result) {
              this.teachers = result;
              resolve(result);
            }
          }, (error: any) => {
            console.log(error);
            reject(error);
          })
        }
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion

  //#region Members()

  public onChangeMembers(members: any[], columns: DisplayColumn[]): void {
    this.members = members;
    this.columns = columns;
    this.isTeacher = !this.isTeacher;
  }

  public intializeColumns(): void {
    this.studentColumns = [
      { field: "name", label: "Aluno", displayColumnType: DisplayColumnType.TEXT },
      { field: "age", label: "Idade", displayColumnType: DisplayColumnType.NUMERIC }
    ];

    this.teacherColumns = [
      { field: "member.name", label: "Professor", displayColumnType: DisplayColumnType.OBJECT }
    ];

    this.columns = this.studentColumns;
    this.isTeacher = false;
  }

  public getValue(entity: any, column: DisplayColumn): string {
    if (column.displayColumnType == DisplayColumnType.OBJECT) {
      let fields: string[] = column.field.split(".");
      let currentValue: any = entity;

      fields.forEach((field: string) => {
        currentValue = currentValue[field];
      });

      return currentValue;
    }

    return entity[column.field]
  }

  public openTransferClassDialog(): void {
    this.transferClassDialog = this.dialogService.open(TransferClassDialogComponent, {
      data: {
        entities: this.members,
        currentClass: this.selectedEntity,
        isTeacher: this.isTeacher
      },
      styleClass: "md:w-auto w-11 h-full flex flex-column",
      header: "Tranferência de sala",
      position: "top",
      closable: true,
      closeOnEscape: false,
      draggable: false,
    });

    this.transferClassDialog?.onClose.subscribe({
      next: (result: any) => {
        if (result) {
          if (this.isTeacher) {
            this.teachers = this.teachers.filter((x: any) => x.id != result.id);
            this.members = this.teachers;
          }
          else {
            this.students = this.students.filter((x: any) => x.id != result.id);
            this.members = this.students;
          }

          this.messageService.add({
            summary: `${this.isTeacher ? "Professor" : "Aluno"} remanejado!`,
            detail: `${result.name} foi remanjado para ${result.class.name}`,
            life: 3000,
            severity: "success",
            closable: true
          });
        }
      },
      error: (error: any) => {
        console.log(error);
        this.messageService.add({
          summary: "Erro!",
          detail: "Um erro inesperado ocorreu: " + error.message,
          life: 3000,
          severity: "error"
        });
      }
    });
  }
  //#endregion
}
