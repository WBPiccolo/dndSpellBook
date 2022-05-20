import { Component, Input, OnInit } from '@angular/core';
import { CardType, Spell } from 'src/app/shared/sharedTypes';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() spellData: Spell = {};
  @Input() type: CardType = CardType.SPELL;
  constructor() {}

  ngOnInit(): void {}

  getComponents(): string {
    let formattedText = '';
    this.spellData.components?.verbal ? (formattedText += 'V, ') : '';
    this.spellData.components?.somatic ? (formattedText += 'S, ') : '';
    this.spellData.components?.materials
      ? (formattedText +=
          'M (' + this.spellData.components?.materials?.join(', ') + ')')
      : '';
    formattedText = formattedText.trim();
    formattedText[formattedText.length - 1] === ','
      ? (formattedText = formattedText.replace(/,\s*$/, ''))
      : '';
    return formattedText;
  }

  getSpellCastingData(): string {
    let castingData: string = '';
    if (this.spellData.level === 0) {
      castingData = `Trucchetto`;
    } else {
      castingData = `${this.spellData.level}° Livello`;
    }
    castingData += ` ${this.spellData.school}`;
    if (this.spellData.isRitual || this.spellData.requiresConcentration) {
      castingData += `,`;
    }
    castingData += this.spellData.isRitual ? ' Rituale' : '';
    castingData += this.spellData.requiresConcentration
      ? ' Concentrazione'
      : '';

    return castingData;
  }

  calculateFontSize(): number {
    let charNumber =
      (this.spellData.description?.length || 0) +
      (this.spellData.atHigherLevels?.length || 0);
    if (charNumber < 200) {
      charNumber = 200;
    }
    // let fontSize: number = 16;
    // if (charNumber <= 600 && charNumber > 400) {
    //   fontSize = 14;
    // } else if (charNumber <= 800 && charNumber > 600) {
    //   fontSize = 12;
    // } else if (charNumber <= 1000 && charNumber > 800) {
    //   fontSize = 12;
    // } else if (charNumber <= 1050 && charNumber > 800) {
    //   fontSize = 9;
    // } else if (charNumber > 1050) {
    //   fontSize = 5;
    // }
    // return fontSize;

    if (charNumber >= 1000) {
      return 15 - charNumber / 140;
    }

    //Viva i magic numbers
    return 15 - charNumber / 120;
  }
}
