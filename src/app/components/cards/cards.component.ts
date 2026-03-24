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

    /** Items para o card */
    @Input()
    public items!: MenuItem[];

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

    /**
     * @description Navega para o alvo
     * @param target Alvo
     * @returns {void} Vazio
     */
    public navigateTo(target: string): void {
        this.router.navigate([target]);
    }

    /**
     * @description Transforma o texto em minúsculo
     * @param label Texto
     * @returns {string} Texto
     */
    public getLower(label: string): string {
        return label.toLowerCase();
    }
    //#endregion

}
