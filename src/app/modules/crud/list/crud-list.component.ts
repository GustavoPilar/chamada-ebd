import { MessageService, PrimeIcons } from 'primeng/api';
import { DisplayColumnTypeEnum } from './../../../models/utils/display-column-type';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { DisplayColumn } from "../../../models/utils/display-column";
import { BehaviorSubject, Subject } from "rxjs";
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/utils/local-storage.service';

@Component({
    selector: "app-crud-list",
    standalone: false,
    templateUrl: "./crud-list.component.html"
})
export class CrudListComponent implements OnInit, AfterViewInit, OnDestroy {

    //#region Fields
    /** Nome da entidade */
    @Input() entityName!: string;

    /** Referência da visualização do crud base */
    @ViewChild(CrudBaseComponent, { static: true })
    public crudBaseComponent?: CrudBaseComponent;

    //#endregion

    //#region Constructor
    constructor(private viewRef: ViewContainerRef,
        private cdr: ChangeDetectorRef,
        private router: Router,
        @Inject(MessageService) private messageService: MessageService,
        @Inject(ConfirmationService) private confirmationService: ConfirmationService,
        @Inject(LocalStorageService) private localStorageService: LocalStorageService
    ) { }
    //#endregion

    //#region OnInit
    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
        this.crudBaseComponent?.entitiesLoaded$.unsubscribe();
    }
    //#endregion


    //#region Members
    /** Carrega o component de crud base */
    public async loadComponent(): Promise<void> {
        const module = await import(`../entities/${this.entityName}/${this.entityName}.component.ts`);
        const componentName: string = Object.keys(module)[0];
        const createdComponent = this.viewRef.createComponent(module[componentName]);
        this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

        if (this.crudBaseComponent) {
            this.crudBaseComponent.entityName = this.entityName;
            this.crudBaseComponent.entitiesLoaded$.subscribe(() => {
                this.cdr.detectChanges();
            });

            this.crudBaseComponent.initList();
            this.cdr.detectChanges();
        }
    }

    /** Retorna o tipo da coluna */
    public getColumnType(column: DisplayColumnTypeEnum): string {
        let type: string = "";

        switch (column) {
            case 1: // NUMERIC
                type = "numeric"
                break;
            case 2: // BOOLEAN
                type = "boolean";
                break;
            case 3: // DATE
                type = "date";
                break;
            default: // TEXT | OBJECT
                type = "text"
        }

        return type;
    }

    /** Abre o formulário de edição da entidade */
    public openEdit(id: number): void {
        this.router.navigate(["manager/edit", this.entityName, id]);
    }

    /** Abre o formulário de nova entidade */
    public openNew(): void {
        this.router.navigate(["manager/new", this.entityName]);
    }

    /** Remove o registro */
    public deleteEntity(id: number): void {
        if (this.crudBaseComponent?.entities && this.crudBaseComponent.entities.length <= 1) {
            this.messageService.add({
                summary: "Erro",
                detail: "Edite o registro.",
                severity: "error",
                life: 3000,
                closable: true
            });
        }

        this.confirmationService.confirm({
            header: "Excluir registro",
            message: "Deseja excluir o registro?",
            icon: PrimeIcons.QUESTION_CIRCLE,
            closable: true,
            accept: () => {
                this.crudBaseComponent?.deleteEntity(id);
            }
        })
    }
    //#endregion

}
