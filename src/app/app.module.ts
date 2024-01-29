// Importa os módulos necessários do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent,
    
  ],

  // Importa módulos externos necessários
  imports: [
    BrowserModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }