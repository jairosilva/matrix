import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaRepositoriosComponent } from './lista-repositorios/lista-repositorios.component';

import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RepositoriosService } from './repositorios.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ListaRepositoriosComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RepositoriosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
