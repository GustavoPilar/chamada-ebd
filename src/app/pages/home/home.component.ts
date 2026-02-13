import { Component, OnInit } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  standalone: false
})
export class HomeComponent implements OnInit {

  //#region Fields
  public homeOptions: any[] = [];
  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initializeHomeOptions();
  }
  //#endregion

  //#region Methods :: initializeHomeOptions()

  /**
   * @description Inicia as opções da página home
   * @returns void
   */
  public initializeHomeOptions(): void {
    this.homeOptions = [
      {
        title: "Cadastro",
        styleClass: "manager",
        buttonLabel: "Cadastrar",
        icon: PrimeIcons.LIST,
        target: "/manager"
      },
      {
        title: "Chamada",
        buttonLabel: "Fazer chamada",
        icon: PrimeIcons.TICKET,
        styleClass: "roll",
        target: "404"
      },
    ]
  }
  //#endregion
}
