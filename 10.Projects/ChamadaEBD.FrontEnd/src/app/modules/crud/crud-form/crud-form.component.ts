import { ChangeDetectorRef, Component, inject, OnInit, Type, ViewChild, ViewContainerRef, ViewRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { ApiService } from "../../../services/communication/api.service";
import { ActivatedRoute } from "@angular/router";
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

    @ViewChild("container", { read: ViewContainerRef })
    private childRef: ViewContainerRef;

    public crudBaseComponent: CrudBaseComponent;

    public loading: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        private containerRef: ViewContainerRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.entityName = this.activatedRoute.params["_value"].entityName;
        this.entityId = this.activatedRoute.params["_value"].entityId;
    }
    
    async ngOnInit(): Promise<void> {
        const loadedModule = await import("../entities/" + this.entityName + "/" + this.entityName + ".component.ts");
        const componentName: string = Object.keys(loadedModule)[0];
        const createdComponent = this.containerRef.createComponent(loadedModule[componentName]);
        this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;
    
        this.crudBaseComponent.entityName = this.entityName;
        this.crudBaseComponent.isForm = true;
        this.crudBaseComponent.init();
        this.loadEntity();
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