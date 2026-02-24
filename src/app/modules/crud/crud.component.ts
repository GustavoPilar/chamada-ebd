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
        title: "Cadastre ou remova membros da EBD"
      },
      {
        label: "Casamentos",
        icon: PrimeIcons.GIFT,
        target: "weedingDate",
        title: "Cadastre ou remova aniversários de casamento"
      },
      {
        label: "Classes",
        icon: PrimeIcons.OBJECTS_COLUMN,
        target: "class",
        title: "Cadastre ou remova classes da EBD"
      },
      {
        label: "Professor",
        icon: PrimeIcons.ID_CARD,
        target: "teacher",
        title: "Cadastre ou remova professores da EBD"
      }
    ]
  }

  public navigateTo(target: string): void {
    this.router.navigate(["manager/list", target]);
  }
  //#endregion
}
