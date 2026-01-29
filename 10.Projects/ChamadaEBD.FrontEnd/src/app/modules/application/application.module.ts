import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApplicationComponent } from "./application.component";
import { ApplicationRoutingModule } from "./application-routing.module";

@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  providers: [

  ]
})
export class ApplicationModule { }
