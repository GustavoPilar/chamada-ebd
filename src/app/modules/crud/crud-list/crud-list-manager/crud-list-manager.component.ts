import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../crud-list.component";

@Component({
  selector: "app-crud-list-manager",
  templateUrl: "./crud-list-manager.component.html",
  standalone: false
})
export class CrudListManagerComponent implements OnInit, AfterViewInit {

  //#region Fields
  @ViewChild(CrudListComponent)
  public crudListComponent!: CrudListComponent;
  //#endregion

  //#region Constructor
  constructor(private activatedRoute: ActivatedRoute) {

  }
  //#endregion

  //#region OnInit() & AfterViewInit()
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initializeCrudList();
  }
  //#endregion

  //#region Methods :: InitializeCrudList()
  public initializeCrudList(): void {
    let entityName: string = this.activatedRoute.snapshot.params["entityName"];

    if (entityName && this.crudListComponent) {
      this.crudListComponent.entityName = entityName;
      this.crudListComponent.loadComponent();
    }
  }
  //#endregion
}
