import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SpellbookComponent } from './components/spellbook/spellbook.component';
import { DiceBoldPipe } from './pipes/dice-bold-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomepageComponent,
    SpellbookComponent,
    DiceBoldPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
