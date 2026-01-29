import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/manager", pathMatch: 'full' },
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(m => m.CrudModule), data: { title: "Cadastros" } },
  { path: "application", loadChildren: () => import("./modules/application/application.module").then(m => m.ApplicationModule), data: { title: "Applicação" } },
  { path: "**", redirectTo: "/manager", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
