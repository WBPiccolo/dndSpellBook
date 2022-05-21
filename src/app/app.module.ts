import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SpellbookComponent } from './components/spellbook/spellbook.component';
import { DiceBoldPipe } from './pipes/dice-bold-pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormManagerComponent } from './components/form-manager/form-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomepageComponent,
    SpellbookComponent,
    DiceBoldPipe,
    FormManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
