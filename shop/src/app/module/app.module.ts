// modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

// components
import { AppComponent } from './../component/app/app.component';
import { NavbarComponent } from './../component/navBar/navBar.component';
import { LoginComponent } from './../component/login/login.component';
import { SigninComponent } from './../component/signin/signin.component';
import { MenuComponent } from './../component/menu/menu.component';

import { routing } from './../app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
