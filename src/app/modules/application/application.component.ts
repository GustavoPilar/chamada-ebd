import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
    selector: "app-application",
    standalone: false,
    templateUrl: "./application.component.html"
})
export class ApplicationComponent implements OnInit {

    //#region Fields
    public items!: MenuItem[];
    //#endregion

    //#region Constructor
    constructor(private router: Router) {

    }
    //#endregion

    //#region OnInit()
    public ngOnInit(): void {
        this.items = [
            { title: "Chamada", label: "Fazer chamada", target: "class-roll", icon: PrimeIcons.TICKET }
        ];
    }
    //#endregion

    //#region Members
    public navigateTo(target: string): void {
        this.router.navigate(["application", target]);
    }

}
