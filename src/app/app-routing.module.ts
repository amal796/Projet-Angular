import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifComponent } from './modif/modif.component';
import { AddUniversiteComponent } from './Universite/Components/AddUniversite/add-universite/add-universite.component';
import { ListUniversiteComponent } from './Universite/Components/ListUniversite/list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './Universite/Components/UpdateUniversite/update-universite/update-universite.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Table', component: TableComponent },
  { path: 'Ajouter', component: AjoutComponent },
  { path: 'Modifier', component: ModifComponent },
  { path: 'AddUniversite', component: AddUniversiteComponent },
  { path: 'ListUniversite', component: ListUniversiteComponent },
  { path: 'UpdateUniversite', component: UpdateUniversiteComponent },
  { path: '**', component: E404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
