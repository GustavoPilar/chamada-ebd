import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent, TypeDescription } from "../../base/crud-base.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudManager } from "../../base/crud-manager.service";
import { Column } from "../../models/column";
import { ColumnType } from "../../models/column-type";

@Component({
  selector: "app-class-room",
  templateUrl: "./classRoom.component.html",
  styleUrl: "./classRoom.component.css",
  standalone: false
})
export class ClassRoomComponent extends CrudBaseComponent implements OnInit {
  //#region Fields
  public currentDate: Date = new Date();
  //#endregion

  //#region Constructor
  constructor(public crudManager: CrudManager,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder
  ) {
    super(crudManager, apiService, formBuilder)
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
        this.selectedEntity?.studentsCount ?? 0,
        Validators.required
      ],
      teachersCount: [
        this.selectedEntity?.teachersCount ?? 0,
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
      }
    ]
  }

  public override loadResources(): Promise<any[]> {
    return Promise.all([

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

  //#region Events Emmiters
  public OnSelectHour(target: string, event: Date): void {
  }
  //#endregion
}
