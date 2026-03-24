import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuComponent } from "./menu/menu.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { CardsComponent } from "./cards/cards.component";
import { ApplicationRoutingModule } from "../modules/application/application-routing.module";

@NgModule({
    imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ApplicationRoutingModule
],
    declarations: [
        MenuComponent,
        CardsComponent
    ],
    exports: [
        MenuComponent,
        CardsComponent
    ],
    providers: [

    ]
})
export class ComponentsModule { }
