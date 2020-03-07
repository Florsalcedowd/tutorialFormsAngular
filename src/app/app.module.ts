import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/ngmodel/form/form.component';
import { TablaComponent } from './components/ngmodel/tabla/tabla.component';
import { FormReactivoComponent } from './components/reactivo/form-reactivo/form-reactivo.component';
import { TablaReactivoComponent } from './components/reactivo/tabla-reactivo/tabla-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablaComponent,
    FormReactivoComponent,
    TablaReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
