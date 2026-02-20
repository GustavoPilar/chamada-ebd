import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  standalone: false
})
export class CrudComponent implements OnInit {

  //#region Fields
  public crudOptions: MenuItem[] = [];
  //#endregion

  //#region Constructor
  constructor(private router: Router) {

  }
  //#endregion

  //#region OnInit()
  public ngOnInit(): void {
    this.initializeCrudOptions();
  }
  //#endregion

  //#region Methods
  public initializeCrudOptions(): void {
    this.crudOptions = [
      {
        label: "Geral",
        icon: PrimeIcons.USERS,
        target: "member",
        title: "Cadastre ou remova um membro da EBD"
      },
      {
        label: "Casamentos",
        icon: PrimeIcons.GIFT,
        target: "weedingDate",
        title: "Cadastre ou remova um aniversário de casamento"
      }
    ]
  }

  public navigateTo(target: string): void {
    this.router.navigate(["manager/list", target]);
  }
  //#endregion
}
