import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/shared/spell';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() spellData: Spell = {};

  constructor() {}

  ngOnInit(): void {}
}
