import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ButtonModule } from "primeng/button";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "../app-routing-module";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule
  ],
  providers: [

  ]
})
export class PagesModule { }
