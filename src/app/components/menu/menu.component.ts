import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";

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
    private menuService: MenuSelectionService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.values = this.menuService.GetAllOptions();
  }
  //#endregion

}
