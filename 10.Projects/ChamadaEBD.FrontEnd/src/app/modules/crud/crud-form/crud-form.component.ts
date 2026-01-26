import { ChangeDetectorRef, Component, inject, OnInit, Type, ViewChild, ViewContainerRef, ViewRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { ApiService } from "../../../services/communication/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FocusTrap } from "primeng/focustrap";
import { UserComponent } from "../entities/user/user.component";

@Component({
    selector: "app-crud-form",
    templateUrl: "./crud-form.component.html",
    styleUrl: "./crud-form.component.css",
    standalone: false
})
export class CrudFormComponent implements OnInit {
    public entityName: string;
    public entityId: number;
    public selectedEntity: any;

    @ViewChild ("form", { read: ViewContainerRef })
    formContainerRef: ViewContainerRef;

    public crudBaseComponent: CrudBaseComponent;

    public loading: boolean = true;

    constructor(private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.entityName = this.activatedRoute.params["_value"].entityName;
        this.entityId = this.activatedRoute.params["_value"].entityId;
    }

    async ngOnInit(): Promise<void> {

    }

    async ngAfterViewInit() {

    }

    public async loadFormComponent() {
        const loadedModule = await import("../entities/" + this.entityName + "/" + this.entityName + ".component.ts");
        const componentName: string = Object.keys(loadedModule)[0];

        this.formContainerRef.clear();
        const createdComponent = this.formContainerRef.createComponent(loadedModule[componentName]);
        this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

        this.crudBaseComponent.entityName = this.entityName;
        this.crudBaseComponent.isForm = true;
        this.crudBaseComponent.init();
        this.loadEntity().then((result) => {
            if (result) {
                this.crudBaseComponent.selectedEntity = result;
            }
        });
    }

    public loadEntity(): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            try {
                this.apiService.GetById(this.entityName, this.entityId).then((result: any) => {
                    if (result) {
                        this.selectedEntity = result;
                        this.loading = true;
                        this.changeDetectorRef.detectChanges();
                        resolve(this.selectedEntity);
                    }
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }
}