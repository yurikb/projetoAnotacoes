import { AnotacoesAddComponent } from './components/anotacoes/anotacoes-add/anotacoes-add.component';
import { CategoriaAddComponent } from './components/categoria/categoria-add/categoria-add.component';
import { AnotacoesListComponent } from './components/anotacoes/anotacoes-list/anotacoes-list.component';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  //Categorias
  {path: 'categorias', component: CategoriaListComponent},
  {path: 'categoria-add', component: CategoriaAddComponent},
  {path: 'categoria-update/:id', component: CategoriaAddComponent},
  //Notas
  {path: 'notas', component: AnotacoesListComponent},
  {path: 'nota-add', component: AnotacoesAddComponent},
  {path: 'nota-update/:id', component: AnotacoesAddComponent},
  //Redirect
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
