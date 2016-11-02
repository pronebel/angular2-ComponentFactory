import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentBuilderDirective } from './shared/directives/component-builder.directive';
import { FieldsModule } from './shared/fields/fields.module'

@NgModule({
  declarations: [
    AppComponent,
    ComponentBuilderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
