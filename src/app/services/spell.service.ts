import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockSpellbook } from '../mock/spell';
import { Spell } from '../shared/sharedTypes';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  public readonly spells$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor() {
    this.loadMock();
  }

  addSpell(newSpell: Spell) {
    this.spells$.next([...this.spells$.getValue(), newSpell]);
  }

  loadMock() {
    const spellMock: Spell[] = mockSpellbook;
    this.spells$.next(spellMock);
  }
}
