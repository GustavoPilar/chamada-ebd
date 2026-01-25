import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { Column } from "../models/column";
import { CrudManager } from "./crud-manager.service";

@Component({
    selector: "app-crud-base",
    template: "",
    standalone: false,
    providers: [CrudManager]
})
export abstract class CrudBaseComponent implements OnInit {

    public entityName: string;

    public isForm: boolean = false;
    public isList: boolean = true;

    constructor(public crudManager: CrudManager,
        protected apiService: ApiService
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    public init(): void {
        this.crudManager.initialize(this);
    }

    //#region Members Abstracts
    abstract GetColumns(): Column[];
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
