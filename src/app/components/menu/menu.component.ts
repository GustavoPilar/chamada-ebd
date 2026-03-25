import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  standalone: false,
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {

  //#region Fields
  public values!: MenuItem[];
  //#endregion

  //#region Constructor
  constructor(
    private router: Router,
    private menuService: MenuSelectionService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.values = this.menuService.GetAllOptions();
  }
  //#endregion

  //#region Members
  public navigateTo(routerLink: string): void {
    if (routerLink) {
      console.log(routerLink);
      this.router.navigateByUrl(routerLink);
    }
  }
  //#endregion
}
