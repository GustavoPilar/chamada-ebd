import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../../list/crud-list.component";
import { CrudFormComponent } from "../crud-form.component";

@Component({
    selector: "app-crud-form-manager",
    standalone: false,
    templateUrl: "./crud-form-manager.component.html"
})
export class CrudFormManagerComponent implements AfterViewInit {

    //#region Fields
    @ViewChild(CrudFormComponent)
    private crudFormComponent!: CrudFormComponent;
    //#endregion

    //#region Constructor
    constructor(private activatedRoute: ActivatedRoute) {
    }
    //#endregion

    //#region AfterViewInit
    public ngAfterViewInit(): void {
        this.loadCrudList();
    }
    //#endregion

    //#region Members
    public loadCrudList(): void {
        let entityName: string = this.activatedRoute.snapshot.params["entityName"];
        let entityNumber: string = this.activatedRoute.snapshot.params["entityId"];

        if (entityName) {
            this.crudFormComponent.entityName = entityName;
            this.crudFormComponent.entityId = Number.parseInt(entityNumber);
            this.crudFormComponent.loadComponent();
        }
    }
    //#endregion
}
