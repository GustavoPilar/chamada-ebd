import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../crud-list.component";

@Component({
  selector: "app-crud-list-manager",
  templateUrl: "./crud-list-manager.component.html",
  styleUrl: "./crud-list-manager.component.css",
  standalone: false
})
export class CrudListManagerComponent implements OnInit {

  @ViewChild(CrudListComponent)
  crudListComponent: CrudListComponent;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initCrudList();
  }

  public initCrudList(): void {
    let entityName: string = this.activatedRoute.params["_value"].entityName;

    if (entityName) {
      this.crudListComponent.entityName = entityName;
      this.crudListComponent.initialize();
    }
  }
}
