import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ChangeDetectorRef, Component, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { CrudManager } from "../base/crud-manager.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../../services/communication/api.service";
import { ColumnType } from "../models/column-type";

@Component({
    selector: "app-crud-list",
    templateUrl: "./crud-list.component.html",
    styleUrl: "./crud-list.component.css",
    standalone: false,
    providers: [CrudManager]
})
export class CrudListComponent {

    public entityName: string;
    public entities: any[] = [];
    public crudBaseComponent: CrudBaseComponent;

    public loading: boolean = true;

    constructor(public crudManager: CrudManager,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private viewRef: ViewContainerRef,
        private changeDetectorRef: ChangeDetectorRef,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.entityName = this.activatedRoute.params["_value"].entityName;
        this.crudManager.entityName = this.entityName;
    }

    async ngOnInit(): Promise<any> {
        let moduleImported = await import("../entities/" + this.entityName + "/" + this.entityName + ".component.ts");
        let componentName: string = Object.keys(moduleImported)[0];
        let componentCreated = this.viewRef.createComponent(moduleImported[componentName]);

        this.crudBaseComponent = componentCreated.instance as CrudBaseComponent;
        this.crudBaseComponent.entityName = this.entityName;
        this.crudBaseComponent.isList = true;
        this.crudBaseComponent.init();

        this.crudManager.loadEntities().then((result) => {
            this.entities = result;
            this.loading = false;
            this.changeDetectorRef.detectChanges();
        });
    }

    ngAfterViewInit(): void {
    
    }

    public loadEntities(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                this.crudManager.loadEntities().then((result: any) => {
                    if (result) {
                        resolve(result);
                    }
                })
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    public checkBooleanType(type: ColumnType): boolean {
        return type == ColumnType.BOOLEAN;
    }

    public editEntity(entity: any): void {
        this.router.navigate(["/manager/edit/", this.entityName, entity.id]);
    }

    public confirmationDelete(entity: any): void {
        this.confirmationService.confirm({
            header: "Confirmar exclusão",
            message: `Deseja excluir o item ${entity.code}`,
            icon: PrimeIcons.QUESTION_CIRCLE,
            accept: () => { 
                this.loading = true;
                let id = entity.id;
                this.crudBaseComponent.deleteEntity(id, entity).then((result) => {
                    if (result) {
                        this.loadEntities().then((result) => {
                            if (result) {
                                this.entities = result;
                                this.loading = false;
                                this.changeDetectorRef.detectChanges();
                            }
                        })
                    }
                });
            }
        });
    }

}
