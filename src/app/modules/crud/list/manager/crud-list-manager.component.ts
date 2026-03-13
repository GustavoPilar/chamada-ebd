import { AfterViewInit, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../crud-list.component";
import { LocalStorageService } from "../../../../services/utils/local-storage.service";

@Component({
  selector: "app-crud-list-manager",
  standalone: false,
  templateUrl: "./crud-list-manager.component.html"
})
export class CrudListManagerComponent implements OnInit, AfterViewInit {

  //#region Fields
  @ViewChild(CrudListComponent)
  private crudListComponent!: CrudListComponent;

  //#endregion

  //#region Constructor
  constructor(private activatedRoute: ActivatedRoute,
    @Inject(LocalStorageService) private localStorageService: LocalStorageService
  ) {
  }
  //#endregion

  //#region AfterViewInit
  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.loadCrudList();
  }
  //#endregion

  //#region Members
  public loadCrudList(): void {
    let entityName = this.activatedRoute.snapshot.params["entityName"];

    if (entityName) {
      this.crudListComponent.entityName = entityName;
      this.crudListComponent.loadComponent();
    }
  }
  //#endregion
}
