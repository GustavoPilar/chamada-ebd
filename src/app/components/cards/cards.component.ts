import { Component, input, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
    selector: "app-cards",
    standalone: false,
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {

    //#region Fields

    @Input()
    public items!: MenuItem[];

    @Input()
    public prevRouterLink!: string;

    //#endregion

    //#region Constructor
    constructor(private router: Router) {

    }
    //#endregion

    //#region OnInit()
    public ngOnInit(): void {
        
    }
    //#endregion

    //#region Members
    public navigateTo(target: string): void {
        this.router.navigate([this.prevRouterLink, target]);
    }

    public getLower(label: string): string {
        return label.toLowerCase();
    }
    //#endregion

}
