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

  getComponents(): string {
    let formattedText = '';
    this.spellData.components?.verbal ? (formattedText += 'V, ') : '';
    this.spellData.components?.somatic ? (formattedText += 'S, ') : '';
    this.spellData.components?.materials
      ? (formattedText += this.spellData.components?.materials?.join(', '))
      : '';
    formattedText = formattedText.trim();
    console.log(formattedText, formattedText[formattedText.length - 1] === ',');
    formattedText[formattedText.length - 1] === ','
      ? formattedText = formattedText.replace(/,\s*$/, "")
      : '';
    return formattedText;
  }
}
