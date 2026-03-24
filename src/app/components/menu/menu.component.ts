import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";

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
    constructor() {

    }
    //#endregion

    //#region OnInit
    public ngOnInit(): void {
        this.values = [
            { label: "Cadastros", routerLink: "manager", icon: PrimeIcons.LIST },
            { label: "Aplicação", routerLink: "application", icon: PrimeIcons.LIST },
        ];
    }
    //#endregion

}
