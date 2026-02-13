import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    MenuBarComponent
  ],
  providers: [

  ]
})
export class ComponentsModule { }
