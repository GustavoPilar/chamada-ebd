import { CrudManager } from './../../base/crud-manager.service';
import { CrudBaseComponent, TypeDescription } from './../../base/crud-base.component';
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService } from '../../../../services/communication/api.service';
import { Column } from '../../models/column';
import { ColumnType } from '../../models/column-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  standalone: false,
  providers: [CrudManager]
})
export class StudentComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public users: any[] = [];
  public classRooms: any[] = [];
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
      userId: [
        this.selectedEntity.userId,
        Validators.required
      ],
      classRoomId: [
        this.selectedEntity.classRoomId,
        Validators.required
      ],
      attendanceCount: [
        this.selectedEntity?.attendanceCount ?? 0,
        Validators.required
      ],
      absenceCount: [
        this.selectedEntity?.absenceCount ?? 0,
        Validators.required
      ],
      attendancePercentage: [
        this.selectedEntity?.attendancePercentage ?? 0,
        Validators.required
      ],
      description: [
        this.selectedEntity?.description
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
        name: "attendanceCount",
        label: "Presenças",
        type: ColumnType.NUMBER
      },
      {
        name: "absenceCount",
        label: "Faltas",
        type: ColumnType.NUMBER
      },
      {
        name: "attendancePercentage",
        label: "Porcentagem de presença",
        type: ColumnType.NUMBER
      }
    ]
  }

  public override loadResources(): Promise<any[]> {
    return Promise.all([
      this.getUsers(),
      this.getClassRooms()
    ])
  }

  public getTypeDescription(): TypeDescription {
    return new TypeDescription("Aluno", "Alunos", false, this.selectedEntity?.user?.name ?? null);
  }

  public override prepareEntityToSave(): any {
    let entity = this.entityForm.value;
    return entity;
  }
  //#endregion

  //#region Resources :: getUsers()
  public getUsers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.Get("user").then((result: any) => {
          if (result) {
            this.users = result;
            resolve(result);
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public getClassRooms(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.Get("classRoom").then((result: any) => {
          if (result) {
            this.classRooms = result;
            resolve(result);
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#region
}
