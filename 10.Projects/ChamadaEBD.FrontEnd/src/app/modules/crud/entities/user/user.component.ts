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
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
  standalone: false,
  providers: [CrudManager]
})
export class UserComponent extends CrudBaseComponent implements OnInit {

  //#region Field
  public class: any = { description: "Sem classe" };
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
      name: [
        this.selectedEntity?.name,
        Validators.required
      ],
      age: [
        this.selectedEntity?.age,
        Validators.required
      ],
      phone: [
        this.selectedEntity?.phone,
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
      attendanceFrequency: [
        this.selectedEntity?.attendanceFrequency ?? 0,
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
        name: "name",
        label: "Nome",
        type: ColumnType.STRING
      },
      {
        name: "age",
        label: "Idade",
        type: ColumnType.NUMBER
      },
      {
        name: "phone",
        label: "Telefone",
        type: ColumnType.NUMBER
      },
      {
        name: "active",
        label: "Ativo?",
        type: ColumnType.BOOLEAN
      },
    ]
  }

  public getTypeDescription(): TypeDescription {
    return new TypeDescription("Usuário", "Usuários", false, this.selectedEntity?.name ?? null);
  }

  public override loadResources(): Promise<any[]> {
    return Promise.all([
      this.loadClass()
    ])
  }
  //#endregion

  //#region Resources
  public loadClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let withouClass: any = { description: "Sem classe" };

        if (!this.entityId || this.entityId == undefined) {
          this.class = withouClass
          resolve(false);
          return;
        }

        this.apiService.GetClassByUserId(this.entityId).then((result: any) => {
          if (result) {
            this.class = result ?? withouClass;
            resolve(result);
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
