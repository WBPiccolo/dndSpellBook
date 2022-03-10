import { Component } from '@angular/core';
import { mockSpell, mockSpellbook } from './mock/spell';
import { Spell } from './shared/spell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dungeons And Dragons SpellBook';

  spellbook: Spell[] = mockSpellbook;
}
