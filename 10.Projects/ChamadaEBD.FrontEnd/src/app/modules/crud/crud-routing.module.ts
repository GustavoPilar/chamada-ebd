import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";
import { CrudFormManagerComponent } from "./crud-form/crud-form-manager/crud-form-manager.component";
import { CrudListManagerComponent } from "./crud-list/crud-list-manager/crud-list-manager.component";

const routes: Routes = [
    { path: "", component: CrudComponent },
    { path: "list/:entityName", component: CrudListManagerComponent, data: { title: "Lista" } },
    { path: "new/:entityName", component: CrudFormManagerComponent, data: { title: "Formulário" } },
    { path: "edit/:entityName/:entityId", component: CrudFormManagerComponent, data: { title: "Formulário" } },
    { path: "**", redirectTo: "", pathMatch: "full" }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }
