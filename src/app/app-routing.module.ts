import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifComponent } from './modif/modif.component';
import { E404Component } from './e404/e404.component';
import { AjoutBlocComponent } from './ajout-bloc/ajout-bloc.component';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import { ModifBlocComponent } from './modif-bloc/modif-bloc.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Table', component: TableComponent },
  { path: 'ListBloc', component: ListBlocComponent },
  { path: 'Ajouter', component: AjoutComponent },
  { path: 'AjouterBloc', component: AjoutBlocComponent },
  { path: 'Modifier', component: ModifComponent },
  { path: 'ModifierBloc/:id', component: ModifBlocComponent },
  { path: '**', component: E404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
