import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  standalone: false
})
export class MenuBarComponent implements OnInit {

  //#region Fields
  public menuItems: MenuItem[] = [];
  //#endregion

  //#region Constructor
  constructor(private router: Router) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initializeMenuItems();
  }
  //#endregion

  //#region Methods :: initializeMenuItems()
  public initializeMenuItems(): void {
    this.menuItems = [
      {
        label: "Cadastros",
        icon: PrimeIcons.LIST,
        command: ()  => { this.navigateTo("/manager") }
      }
    ]
  }

  public navigateTo(target: string): void {
    this.router.navigate([target]);
  }
  //#endregion
}
