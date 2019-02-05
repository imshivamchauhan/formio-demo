import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormioModule,FormioAppConfig } from 'angular-formio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from '../config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';
import { NgbuilderComponent } from './ngbuilder/ngbuilder.component';
import { NgrendererComponent } from './ngrenderer/ngrenderer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsbuilderComponent } from './jsbuilder/jsbuilder.component';
import { JsrendererComponent } from './jsrenderer/jsrenderer.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbuilderComponent,
    NgrendererComponent,
    JsbuilderComponent,
    JsrendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: FormioAppConfig, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
