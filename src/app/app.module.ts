


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ModifComponent } from './modif/modif.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddUniversiteComponent } from './Universite/Components/AddUniversite/add-universite/add-universite.component';
import { ListUniversiteComponent } from './Universite/Components/ListUniversite/list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './Universite/Components/UpdateUniversite/update-universite/update-universite.component';
import { E404Component } from './e404/e404.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AjoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ModifComponent,
    DashboardComponent,
    LoginComponent,
    AddUniversiteComponent,
    ListUniversiteComponent,
    UpdateUniversiteComponent,
    E404Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
