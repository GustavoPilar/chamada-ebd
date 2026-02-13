import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CrudListManagerComponent } from "./crud-list/crud-list-manager/crud-list-manager.component";
import { CrudFormManagerComponent } from "./crud-form/crud-form-manager/crud-form-manager.component";

const routes: Routes = [
  { path: "", component: CrudComponent, title: "Cadastros" },
  { path: "list/:entityName", component: CrudListManagerComponent, title: "Lista" },
  { path: "edit/:entityName/:entityId", component: CrudFormManagerComponent, title: "Formulário" },
  { path: "new/:entityName", component: CrudFormManagerComponent, title: "Formulário" },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }
