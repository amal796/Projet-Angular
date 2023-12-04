import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocComponent } from './bloc.component';
import { AjoutBlocComponent } from './ajout-bloc/ajout-bloc.component';
import { ModifBlocComponent } from './modif-bloc/modif-bloc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from '../app-routing.module';
import { ListComponent } from './list/list.component';
import { BasicModule } from '../basic/basic.module';


@NgModule({
  declarations: [
    BlocComponent,
    AjoutBlocComponent,
    ModifBlocComponent,
    ListComponent,

  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BasicModule
  ]
})
export class BlocModule { }
