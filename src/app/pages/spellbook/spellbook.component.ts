import { Component, OnInit } from '@angular/core';
import { mockSpellbook } from 'src/app/mock/spell';
import { SpellService } from 'src/app/services/spell.service';
import { Spell, CardType } from 'src/app/shared/sharedTypes';

@Component({
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss'],
})
export class SpellbookComponent implements OnInit {
  spellBook$ = this._spellService.spells$;
  cardTypes = CardType;
  constructor(private _spellService: SpellService) {}

  ngOnInit(): void {}
}
