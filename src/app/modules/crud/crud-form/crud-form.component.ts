import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../base/crud-base";
import { ConfirmationService, PrimeIcons } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-crud-form",
  templateUrl: "./crud-form.component.html",
  standalone: false
})
export class CrudFormComponent implements OnInit, AfterViewInit {

  //#region Fields
  public entityName!: string;
  public entityId!: number;

  public crudBaseComponent!: CrudBaseComponent;

  @ViewChild("form", { read: ViewContainerRef })
  private viewForm!: ViewContainerRef;
  //#endregion

  //#region Constructor
  constructor(private changeDetectorRef: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {

  }
  //#endregion

  //#region OnInit & AfterViewInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {

  }
  //#endregion

  //#region Methods
  public async loadComponent(): Promise<void> {
    if (!this.viewForm) return;

    const module = await import(`../entities/${this.entityName}/${this.entityName}.component.ts`);
    const componentName: string = Object.keys(module)[0];
    const createdComponent = this.viewForm.createComponent(module[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    if (this.crudBaseComponent) {
      this.crudBaseComponent.entityName = this.entityName;
      this.crudBaseComponent.entityId = this.entityId;
      this.crudBaseComponent.isForm = true;
      this.crudBaseComponent.initForm().then(() => this.refresh());
    }
    this.refresh();
  }

  public refresh(): void {
    this.changeDetectorRef.detectChanges();
  }

  public cancel(): void {
    const returnList = () => {
      this.router.navigate(["/manager/list", this.entityName]);
    };

    if (!this.crudBaseComponent?.entityForm?.pristine) {
      this.confirmationService.confirm({
        header: "Deseja voltar?",
        icon: PrimeIcons.QUESTION_CIRCLE,
        message: "As alterações não serão salvas",
        accept: () => returnList(),
        reject: () => { return }
      });
    }
    else {
      returnList();
    }
  }
  //#endregion
}
