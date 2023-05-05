import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NewsCategoriasComponent } from './components/news-categorias/news-categorias.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    NewsCategoriasComponent,
    CardNewsComponent,
    HomeComponent,
    ArtigosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
