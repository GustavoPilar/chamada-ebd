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
    
    public crudOptions: CrudOptions[] = [];

    constructor(private router: Router
    ) {

    }
    
    ngOnInit(): void {
        this.initCrudOptions();
    }

    //#region initCrudOptions(), navigateTo()
    private initCrudOptions(): void {
        this.crudOptions = [
            {
                label: "Usuários",
                crudTarget: "user",
                icon: PrimeIcons.USERS
            }
        ];
    }

    public navigateTo(crudTarget: any): void {
        this.router.navigate(["/manager", crudTarget]);
    }
    //#endregion

}