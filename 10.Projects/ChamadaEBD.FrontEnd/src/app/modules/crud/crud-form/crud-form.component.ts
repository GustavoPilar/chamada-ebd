import { ChangeDetectorRef, Component, inject, OnInit, Type, ViewChild, ViewContainerRef, ViewRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base.component";
import { ApiService } from "../../../services/communication/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FocusTrap } from "primeng/focustrap";
import { UserComponent } from "../entities/user/user.component";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-crud-form",
  templateUrl: "./crud-form.component.html",
  styleUrl: "./crud-form.component.css",
  standalone: false
})
export class CrudFormComponent implements OnInit {
  //#region Fields
  public entityName: string;
  public entityId: number;

  @ViewChild("form", { read: ViewContainerRef })
  formContainerRef: ViewContainerRef;

  public crudBaseComponent: CrudBaseComponent;
  public formDescription: string = "Formulário";

  //#endregion

  //#region Constructor
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.entityName = this.activatedRoute.params["_value"].entityName;
    this.entityId = this.activatedRoute.params["_value"].entityId;
  }
  //#region

  //#region OnInit && AfterViewInit
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
  //#endregion

  //#region Members :: loadFormComponent(), loadEntity()

  /**
   * @description Carrega o componente dinâmico
   * @async
   * @returns Promise void
   */
  public async loadFormComponent(): Promise<void> {
    const loadedModule = await import("../entities/" + this.entityName + "/" + this.entityName + ".component.ts");
    const componentName: string = Object.keys(loadedModule)[0];

    this.formContainerRef.clear();
    const createdComponent = this.formContainerRef.createComponent(loadedModule[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    this.crudBaseComponent.entityName = this.entityName;
    this.crudBaseComponent.entityId = this.entityId;
    this.crudBaseComponent.isForm = true;
    this.loadEntity();
  }

  /**
   * @description Carrega o método InitAsync do CrudBase e verifica as mudanças
   * @returns Promise any
   */
  public loadEntity(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.crudBaseComponent.initialize().then((result) => {
          this.formDescription = this.crudBaseComponent.getFormDescription();
          this.changeDetectorRef.detectChanges();
          resolve(result);
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   * @description Verifica se há alteração no formulário e pergunta se quer voltar para a listagem.
   * @returns void
   */
  public cancelForm(): void {
    if (!this.crudBaseComponent.entityForm.pristine) {
      this.confirmationService.confirm({
        header: "Cancelar alterações",
        message: "Deseja cancelar as alterações e voltar para a listagem?",
        icon: PrimeIcons.QUESTION_CIRCLE,
        accept: () => {
          this.router.navigate(["/manager/list", this.entityName]);
        }
      });
    }
    else {
      this.router.navigate(["/manager/list", this.entityName]);
    }
  }

  /**
   * @description Verifica se o formulário é valido
   * @returns boolean
   */
  public canSave(): boolean {
    if (this.crudBaseComponent) {
      return this.crudBaseComponent.canSave();
    }

    return false;
  }

  /**
   * @description Salva o formulário e retorna para a listagem
   * @returns void
   */
  public saveForm(): void {
    this.crudBaseComponent.saveEntity().then((result: any) => {
      if (result) {
        this.messageService.add({
          summary: "Entidade salva",
          severity: "success",
          life: 1500,
          closable: true
        });
        this.router.navigate(["/manager/list", this.entityName]);
      }
    });
  }
  //#endregion
}
