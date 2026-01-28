import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent, TypeDescription } from "../../base/crud-base.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Column } from "../../models/column";
import { CrudManager } from "../../base/crud-manager.service";
import { ApiService } from "../../../../services/communication/api.service";
import { DialogService } from "primeng/dynamicdialog";

@Component({
    selector: "app-student-checkin",
    templateUrl: "./studentCheckin.component.html",
    styleUrl: "./studentCheckin.component.css",
    standalone: false,
    providers: [CrudManager]
})
export class StudentChekcinComponent extends CrudBaseComponent implements OnInit {

    //#region Fields

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

    GetColumns(): Column[] {
        return [];
    }

    createForm(): FormGroup {
        return this.formBuilder.group({

        });
    }
    getTypeDescription(): TypeDescription {
        return new TypeDescription("Chamada de aluno", "Chamadas de alunos", true, this.selectedEntity?.class?.description);
    }

}
