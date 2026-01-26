import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { Column } from "../models/column";
import { CrudManager } from "./crud-manager.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-crud-base",
    template: "",
    standalone: false,
    providers: [CrudManager]
})
export abstract class CrudBaseComponent implements OnInit {

    public entityName: string;
    public selectedEntity: any;
    public entityForm: FormGroup;

    public isForm: boolean = false;
    public isList: boolean = false;

    constructor(public crudManager: CrudManager,
        protected apiService: ApiService,
        protected formBuilder: FormBuilder
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    public init(): void {
        this.crudManager.initialize(this);

        if (this.isForm) {
            this.initForm();
        }
    }

    public initForm(): void {
        this.entityForm = this.createForm();
    }

    //#region Members Abstracts
    abstract GetColumns(): Column[];
    abstract createForm(): FormGroup;
    //#endregion

    //#region Members Api requests
    public deleteEntity(id: number, entity: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                this.crudManager.deleteEntity(id, entity).then((result: any) => {
                    if (result) {
                        resolve(result);
                    }
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }
    //#endregion
}
