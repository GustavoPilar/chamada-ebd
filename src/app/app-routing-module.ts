import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: "home", loadChildren: () => import("./pages/pages.module").then(pm => pm.PagesModule) },
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(cm => cm.CrudModule) },
  // { path: "application", loadChildren: () => import("./modules/application/application.module").then(app => app.ApplicationModule) },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent, title: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
