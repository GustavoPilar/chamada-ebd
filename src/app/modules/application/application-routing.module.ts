import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassRollComponent } from "./class-roll/class-roll.component";
import { ApplicationComponent } from "./application.component";

const routes: Routes = [
    { path: "", component: ApplicationComponent },
    { path: "class-roll", component: ClassRollComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }

]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule { }
