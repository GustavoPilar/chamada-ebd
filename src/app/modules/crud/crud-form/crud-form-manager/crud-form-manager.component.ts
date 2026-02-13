import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudFormComponent } from "../crud-form.component";

@Component({
  selector: "app-crud-form-manager",
  templateUrl: "./crud-form-manager.component.html",
  standalone: false
})
export class CrudFormManagerComponent implements OnInit, AfterViewInit {

  //#region Fields
  @ViewChild(CrudFormComponent)
  public crudFormComponent!: CrudFormComponent;
  //#endregion

  //#region Constructor
  constructor(private activatedRoute: ActivatedRoute) {

  }
  //#endregion

  //#region OnInit & AfterViewInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.initializeForm();
  }
  //#endregion

  //#region Methods
  public initializeForm():void {
    let entityName: string = this.activatedRoute.snapshot.params["entityName"];
    let entityId: string = this.activatedRoute.snapshot.params["entityId"] ?? 0;

    if (entityName) {
      this.crudFormComponent.entityName = entityName;
      this.crudFormComponent.entityId = parseInt(entityId);
      this.crudFormComponent.loadComponent();
    }
  }
  //#endregion
}
