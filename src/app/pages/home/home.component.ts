import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  //#region Fields

  /** Opções de gerenciamento */
  public responsiveOptions!: any[];

  /** Items de cadastro */
  public managerItems!: MenuItem[];

  /** Items de aplicação */
  public applicationItems!: MenuItem[];

  //#endregion

  //#region Constructor
  constructor(
    private menuSelectionService: MenuSelectionService
  ) {

  }
  //#endregion

  //#region OnInit()
  public ngOnInit(): void {
    this.managerItems = this.menuSelectionService.GetManagerOption().items!;
    this.applicationItems = this.menuSelectionService.GetApplicationOption().items!;

    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 1, numScroll: 1 } ]
  }
  //#endregion

}
