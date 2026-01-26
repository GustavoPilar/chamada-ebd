import { CrudManager } from './../../base/crud-manager.service';
import { CrudBaseComponent, TypeDescription } from './../../base/crud-base.component';
import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../../../services/communication/api.service';
import { Column } from '../../models/column';
import { ColumnType } from '../../models/column-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  standalone: false,
  providers: [CrudManager]
})
export class UserComponent extends CrudBaseComponent implements OnInit {

  //#region Field
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
  //#endregion
}
