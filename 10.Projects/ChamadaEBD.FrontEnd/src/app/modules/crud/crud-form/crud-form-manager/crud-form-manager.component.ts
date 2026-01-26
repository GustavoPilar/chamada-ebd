import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudFormComponent } from "../crud-form.component";

@Component({
    selector: "app-crud-form-manager",
    templateUrl: "./crud-form-manager.component.html",
    styleUrl: "./crud-form-manager.component.css",
    standalone: false
})
export class CrudFormManagerComponent implements OnInit {

    @ViewChild(CrudFormComponent)
    crudForm: CrudFormComponent

    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let entityName = this.activatedRoute.params["_value"].entityName;

        if (entityName) {
            this.crudForm.entityName = entityName;
            this.crudForm.loadFormComponent();
        }
    }
}
