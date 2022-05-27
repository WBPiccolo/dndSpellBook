import { Component, OnInit } from '@angular/core';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'spell-bar',
  templateUrl: './spell-bar.component.html',
  styleUrls: ['./spell-bar.component.scss'],
})
export class SpellBarComponent implements OnInit {
  spells$ = this._spellService.spells$;

  constructor(private _spellService: SpellService) {}

  ngOnInit(): void {}
}
