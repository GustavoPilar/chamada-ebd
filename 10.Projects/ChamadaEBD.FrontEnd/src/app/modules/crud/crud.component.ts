import { Component, OnInit } from "@angular/core";
import { CrudOptions } from "./models/crudOptions";
import { Router } from "@angular/router";
import { PrimeIcons } from "primeng/api";

@Component({
    selector: "app-crud",
    templateUrl: "./crud.component.html",
    styleUrl: "./crud.component.css",
    standalone: false
})
export class CrudComponent implements OnInit {

    //#region Fields
    public crudOptions: CrudOptions[] = [];
    //#endregion

    //#region Constructor
    constructor(private router: Router
    ) {

    }
    //#endregion

    //#region ngOnInit
    ngOnInit(): void {
        this.initCrudOptions();
    }
    //#endregion

    //#region initCrudOptions(), navigateTo()

    /**
     * @description Inicia as opções da lista de cruds
     * @returns void
     */
    private initCrudOptions(): void {
        this.crudOptions = [
            {
                label: "Usuários",
                crudTarget: "user",
                icon: PrimeIcons.USERS
            },
            {
                label: "Classes",
                crudTarget: "class",
                icon: PrimeIcons.OBJECTS_COLUMN
            },
        ];
    }

    /**
     * @description Navega para a a listagem alvo
     * @param crudTarget crud alvo
     * @returns void
     */
    public navigateTo(crudTarget: any): void {
        this.router.navigate(["/manager/list/", crudTarget]);
    }
    //#endregion

}
