import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SpellbookComponent } from './components/spellbook/spellbook.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'spellbook', component: SpellbookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
