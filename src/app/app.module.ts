import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HTTP

@NgModule({
  declarations: [
    AppComponent // Declara el componente principal
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Agrega el módulo HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
