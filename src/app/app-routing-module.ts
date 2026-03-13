import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(cm => cm.CrudModule) },
  { path: "application", loadChildren: () => import("./modules/application/application.module").then(app => app.ApplicationModule) },
  { path: "", redirectTo: "manager", pathMatch: "full" },
  { path: "**", redirectTo: "manager", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
