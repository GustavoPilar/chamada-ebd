import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";

const routes: Routes = [
    { path: "", component: CrudComponent },
    { path: "list/:entityName", component: CrudListComponent, data: { title: "Lista" } },
    { path: "edit/:entityName/:entityId", component: CrudFormComponent, data: { title: "Formulário" } },
    { path: "**", redirectTo: "", pathMatch: "full" }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }