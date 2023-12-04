


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifComponent } from './modif/modif.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

import { BasicModule } from './basic/basic.module';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AjoutComponent,
    
    ModifComponent,
    DashboardComponent,
    LoginComponent,
    E404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BasicModule
  ],
  exports: [
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
