import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { MessageService, ConfirmationService, PrimeIcons } from "primeng/api";
import { CrudBaseComponent } from "../base/crud-base.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-crud-form",
  standalone: false,
  templateUrl: "./crud-form.component.html"
})
export class CrudFormComponent implements OnInit, OnDestroy {

  //#region Fields

  /** Nome da entidade */
  public entityName!: string;

  /** ID da entidade */
  public entityId!: number;

  /** Componente base do crud */
  public crudBaseComponent!: CrudBaseComponent;

  /** Referência de visualização para o formulário */
  @ViewChild("form", { read: ViewContainerRef })
  private viewForm!: ViewContainerRef;

  //#endregion

  //#region Constructor
  constructor(private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.crudBaseComponent?.selectedEntity$.unsubscribe();
  }
  //#endregion

  //#region Members

  /** Carrega o componente de crud base */
  public async loadComponent(): Promise<void> {
    const module = await import(`../entities/${this.entityName}/${this.entityName}.component.ts`);
    const componentName: string = Object.keys(module)[0];
    const createdComponent = this.viewForm.createComponent(module[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    if (this.crudBaseComponent) {
      this.crudBaseComponent.entityName = this.entityName;
      this.crudBaseComponent.entityId = this.entityId;

      this.crudBaseComponent.selectedEntity$.subscribe(() => {
        this.cdr.detectChanges();
      });

      this.crudBaseComponent.createdEntity$.subscribe(() => {
        this.router.navigate(["manager/list", this.entityName]);
      });

      this.crudBaseComponent.initForm();
      this.cdr.detectChanges();
    }
  }

  /** Retorna o valor booleano para a possibiliade de salvamento do formulário */
  public canSave(): boolean {
    if (this.crudBaseComponent == null) return false;

    if (!this.crudBaseComponent.form) return false;

    if (!this.crudBaseComponent.isValid) return false;

    return this.crudBaseComponent.form.valid;
  }

  /** Salva a entidade */
  public saveEntity(): void {
    if (this.entityId > 0) {
      this.crudBaseComponent.updateEntity();
    }
    else {
      this.crudBaseComponent.createEntity();
    }
  }

  /** Cancela o formulário */
  public cancelForm(): void {
    const goToList = () => {
      this.router.navigate(["manager/list", this.entityName]);
    }


    this.confirmationService.confirm({
      header: "Cancelar o formulário",
      message: "As alterações não serão salvas",
      icon: PrimeIcons.QUESTION_CIRCLE,
      acceptIcon: PrimeIcons.CHECK,
      rejectIcon: PrimeIcons.TIMES,
      rejectButtonStyleClass: "bg-red-400 border-red-400",
      accept: goToList
    });
  }
  //#endregion
}
