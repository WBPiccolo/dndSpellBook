import { Component, OnInit } from '@angular/core';
import { mockSpellbook } from 'src/app/mock/spell';
import { Spell } from 'src/app/shared/spell';

@Component({
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss'],
})
export class SpellbookComponent implements OnInit {
  spellbook: Spell[] = mockSpellbook;

  constructor() {}

  ngOnInit(): void {}
}
