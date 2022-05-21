import { Component, OnInit } from '@angular/core';
import { mockSpellbook } from 'src/app/mock/spell';
import { Spell, CardType } from 'src/app/shared/sharedTypes';

@Component({
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss'],
})
export class SpellbookComponent implements OnInit {
  spellbook: Spell[] = mockSpellbook;
  cardTypes = CardType;
  constructor() {}

  ngOnInit(): void {}
}
