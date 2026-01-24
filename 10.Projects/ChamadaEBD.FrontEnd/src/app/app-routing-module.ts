import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SalasComponent } from './pages/salas/salas';
import { AlunosComponent } from './pages/alunos/alunos';
import { UserComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: "", redirectTo: "/manager", pathMatch: 'full' },
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(m => m.CrudModule), data: { title: "Cadastros" } },
  { path: "home", component: HomeComponent, data: { title: "Págian inicial" } },
  { path: "rooms", component: SalasComponent, data: { title: "Salas" } },
  { path: "students", component: AlunosComponent, data: { title: "Alunos" } },
  { path: "users", component: UserComponent, data:  {title: "Usuários" } },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
