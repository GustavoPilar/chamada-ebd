import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { ApiService } from "../../services/communication/api.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-crud",
    standalone: false,
    templateUrl: "./crud.component.html"
})
export class CrudComponent implements OnInit {

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
            { label: "Membros", target: "member", icon: PrimeIcons.USER },
            { label: "Casamentos", target: "weddingDate", icon: PrimeIcons.GIFT },
            { label: "Classes", target: "class", icon: PrimeIcons.OBJECTS_COLUMN },
        ];
    }
    //#endregion

    //#region Members
    public navigateTo(target: string): void {
        this.router.navigate(["manager/list", target]);
    }
}
