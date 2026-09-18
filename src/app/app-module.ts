import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperaBas } from './formulario/opera-bas/opera-bas';
import { Distancia } from './formulario/distancia/distancia';
import { AreaFigura } from './area-figura/area-figura';
@NgModule({
  declarations: [App, HeroesList, HeroesFilterPipe, OperaBas, Distancia, AreaFigura],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
