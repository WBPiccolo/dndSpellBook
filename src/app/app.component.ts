import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { mockSpell, mockSpellbook } from './mock/spell';
import { Spell } from './shared/spell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  title = 'Dungeons And Dragons SpellBook';

  spellbook: Spell[] = mockSpellbook;


  printCards(){
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable.innerHTML);
    doc.save('www.pdf');
  }
}
