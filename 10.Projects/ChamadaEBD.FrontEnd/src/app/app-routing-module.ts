import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SalasComponent } from './pages/salas/salas';
import { AlunosComponent } from './pages/alunos/alunos';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent, data: { title: "Págian inicial" } },
  { path: "rooms", component: SalasComponent, data: { title: "Salas" } },
  { path: "students", component: AlunosComponent, data: { title: "Alunos" } },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
