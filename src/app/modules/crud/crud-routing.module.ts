import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CommonModule } from "@angular/common";
import { CrudListComponent } from "./list/crud-list.component";
import { CrudListManagerComponent } from "./list/manager/crud-list-manager.component";
import { CrudFormManagerComponent } from "./form/manager/crud-form-manager.component";

const routes: Routes = [
    { path: "", component: CrudComponent },
    { path: "list/:entityName", component: CrudListManagerComponent },
    { path: "edit/:entityName/:entityId", component: CrudFormManagerComponent },
    { path: "new/:entityName", component: CrudFormManagerComponent },
    { path: "**", redirectTo: "", pathMatch: "full"}
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudRoutingModule { }
