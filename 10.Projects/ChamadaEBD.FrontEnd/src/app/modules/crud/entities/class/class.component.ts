import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent, TypeDescription } from "../../base/crud-base.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudManager } from "../../base/crud-manager.service";
import { Column } from "../../models/column";
import { ColumnType } from "../../models/column-type";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { UsersWithoutClassComponent } from "./users-without-class/users-without-class.component";
import { UsersClassViewComponnet } from "./users-class-view/users-class-view.component";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrl: "./class.component.css",
  standalone: false,
  providers: [CrudManager]
})
export class ClassComponent extends CrudBaseComponent implements OnInit {
  //#region Fields
  public currentDate: Date = new Date();

  public users: any[] = [];
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder,
    protected viewContainerRef: ViewContainerRef,
    protected dialogService: DialogService
  ) {
    super(crudManager, apiService, formBuilder, viewContainerRef, dialogService)
  }
  //#endregion

  //#region OnInit
  ngOnInit(): void {

  }
  //#endregion

  //#region Memebers :: CreateForm(), GetColumns()
  public createForm(): FormGroup {
    return this.formBuilder.group({
      code: [
        this.selectedEntity?.code,
        Validators.required
      ],
      description: [
        this.selectedEntity?.description,
        Validators.required
      ],
      startHour: [
        new Date(this.selectedEntity?.startHour ?? this.currentDate),
        Validators.required
      ],
      finishHour: [
        new Date(this.selectedEntity?.finishHour ?? this.currentDate),
        Validators.required
      ],
      studentsCount: [
        this.users.filter((x: any) => x.isTeacher == false).length,
        Validators.required
      ],
      teachersCount: [
        this.users.filter((x: any) => x.isTeacher == true).length,
        Validators.required
      ],
      active: [
        this.selectedEntity?.active ?? false,
        Validators.required
      ]
    });
  }

  public GetColumns(): Column[] {
    return [
      {
        name: "code",
        label: "Código",
        type: ColumnType.STRING
      },
      {
        name: "description",
        label: "Descrição",
        type: ColumnType.STRING
      },
      {
        name: "startHour",
        label: "Data Início",
        type: ColumnType.DATE
      },
      {
        name: "finishHour",
        label: "Data Término",
        type: ColumnType.DATE
      },
      {
        name: "studentsCount",
        label: "Qtd. Estudantes",
        type: ColumnType.NUMBER
      },
      {
        name: "teachersCount",
        label: "Qtd. Professores",
        type: ColumnType.NUMBER
      },
      {
        name: "active",
        label: "Sala ativa?",
        type: ColumnType.BOOLEAN
      }
    ]
  }

  public override loadResources(): Promise<any[]> {
    return Promise.all([
      this.loadUsersByClass()
    ])
  }

  public getTypeDescription(): TypeDescription {
    return new TypeDescription("Sala", "Salas", true, this.selectedEntity?.description ?? null);
  }

  public override prepareEntityToSave(): any {
    let entity = this.entityForm.value;

    const localStart = new Date(
      2000, 0, 1,
      entity.startHour.getHours() - 3, // => GMT - 03:00
      entity.startHour.getMinutes(),
      0
    );

    const localFinish = new Date(
      2000, 0, 1,
      entity.finishHour.getHours() - 3, // => GMT - 03:00
      entity.finishHour.getMinutes(),
      0
    );

    entity.startHour = localStart.toISOString();
    entity.finishHour = localFinish.toISOString();

    return entity;
  }
  //#endregion

  //#region Resources
  public loadUsersByClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        if (this.entityId == undefined) {
          resolve(false);
        }

        this.apiService.GetUsersClassesById("List/ClassId", this.entityId).then((result: any) => {
          if (result) {
            this.users = result;
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  //#endregion

  //#region Dynamic Dialogs :: openUsersWithoutClass()
  public openUsersWithoutClass(isTeacher: boolean): void {

    let config: DynamicDialogConfig = {
      header: (isTeacher ? "Professores(as)" : "Alunos(as)") + " disponíveis",
      data: {
        classId: this.entityId,
        isTeacher: isTeacher
      },
      width: "80%",
      height: "90vh",
      closable: true,
      closeOnEscape: true,
      draggable: false
    }

    this.dynamicDialogRef = this.dialogService.open(UsersWithoutClassComponent, config);

    this.dynamicDialogRef.onClose.subscribe((result) => {
      if (result) {
        console.log(result);
      }
    })
  }

  public openUsers(isTeacher: boolean): void {

    let config: DynamicDialogConfig = {
      header: isTeacher ? "Professores(as)" : "Alunos(as)",
      data: {
        classId: this.entityId,
        isTeacher: isTeacher
      },
      width: "80%",
      height: "90vh",
      closable: true,
      closeOnEscape: true,
      draggable: false
    }

    this.dynamicDialogRef = this.dialogService.open(UsersClassViewComponnet, config);

    this.dynamicDialogRef.onClose.subscribe((result) => {
      if (result) {
        console.log(result);
      }
    })
  }
  //#endregion
}
