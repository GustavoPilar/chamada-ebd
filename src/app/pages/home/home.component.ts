import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
    selector: "app-home",
    standalone: false,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    //#region Fields
    public managerItems!: MenuItem[];

    public applicationItems!: MenuItem[];
    //#endregion

    //#region Constructor
    constructor(private router: Router) {

    }
    //#endregion

    //#region OnInit()
    public ngOnInit(): void {
        this.managerItems = [
            { title: "Membros", label: "Adicione, remova ou atualize membros", target: "member", icon: PrimeIcons.USER },
            { title: "Casamentos", label: "Adicione, remova ou atualize aniversários de casamento", target: "weddingDate", icon: PrimeIcons.GIFT },
            { title: "Classes", label: "Adicione, remova ou atualize classes", target: "class", icon: PrimeIcons.OBJECTS_COLUMN },
        ];

        this.applicationItems = [
            { title: "Chamada", label: "Faça a chamada de uma classe", target: "class-roll", icon: PrimeIcons.TICKET }
        ]
    }
    //#endregion

    //#region Members
    public navigateTo(target: string): void {
        this.router.navigate(["manager/list", target]);
    }

    public getLower(label: string): string {
        return label.toLowerCase();
    }
    //#endregion

}
