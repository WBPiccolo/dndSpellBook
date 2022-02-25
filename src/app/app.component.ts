import { Component } from '@angular/core';
import { Spell } from './shared/spell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dndSpellBook';

  mockSpell: Spell = {
    name: 'Eldritch Blast',
    level: 'cantrip',
    school: 'Abjuration',
    castingTime: '1 action',
    range: 'Self',
    duration: '1 round',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
    source: "Player's Handbook",
  };
}
