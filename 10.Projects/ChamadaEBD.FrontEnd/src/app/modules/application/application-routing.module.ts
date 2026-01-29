import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationComponent } from "./application.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: "", component: ApplicationComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class ApplicationRoutingModule { }
