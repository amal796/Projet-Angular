


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
import { E404Component } from './e404/e404.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListeUniversiteComponent } from './liste-universite/liste-universite.component';


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
    E404Component,
    FormUniversiteComponent,
    ListeUniversiteComponent,
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
