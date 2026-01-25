import { CrudManager } from './../../base/crud-manager.service';
import { CrudBaseComponent } from './../../base/crud-base.component';
import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../../../services/communication/api.service';
import { Column } from '../../models/column';
import { ColumnType } from '../../models/column-type';

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    standalone: false,
    providers: [CrudManager]
})
export class UserComponent extends CrudBaseComponent implements OnInit {

    constructor(public crudManager: CrudManager,
        protected apiService: ApiService
    ) {
        super(crudManager, apiService)
    }

    ngOnInit(): void {
        
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
}