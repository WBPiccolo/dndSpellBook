import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Spell } from 'src/app/shared/sharedTypes';

@Component({
  selector: 'form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss'],
})
export class FormManagerComponent implements OnInit, OnChanges {
  //@Input() spellForm: FormGroup;
  spellForm: FormGroup;
  isSpell: boolean = true;
  spellLevels: { level: number; text: string }[] = [
    { level: 0, text: 'Trucchetto' },
    { level: 1, text: 'Primo' },
    { level: 2, text: 'Secondo' },
    { level: 3, text: 'Terzo' },
    { level: 4, text: 'Quarto' },
    { level: 5, text: 'Quinto' },
    { level: 6, text: 'Sesto' },
    { level: 7, text: 'Settimo' },
    { level: 8, text: 'Ottavo' },
    { level: 9, text: 'Nono' },
  ];

  spellSchools: string[] = [
    'Abiurazione',
    'Ammaliamento',
    'Divinazione',
    'Evocazione',
    'Illusione',
    'Invocazione',
    'Necromanzia',
    'Trasmutazione',
    'Altro',
  ];

  constructor() {}

  ngOnInit(): void {
    this.spellForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required]),
      school: new FormControl(null, [Validators.required]),
      castingTime: new FormControl(null, [Validators.required]),
      range: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
      verbal: new FormControl(false),
      somatic: new FormControl(false),
      hasMaterials: new FormControl(false),
      materials: new FormControl({ value: null, disabled: true }),
      description: new FormControl(null, [Validators.required]),
      atHigherLevels: new FormControl(null),
      isRitual: new FormControl(false),
      source: new FormControl(null, [Validators.required]),
      requiresConcentration: new FormControl(false),
    });

    this.spellForm.get('hasMaterials')?.valueChanges.subscribe((newValue) => {
      newValue
        ? this.spellForm.get('materials')?.enable()
        : this.spellForm.get('materials')?.disable();
    });

    // this.spellForm.valueChanges.subscribe((newValue) => {
    //   this.spellForm.get('hasMaterials').
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //TODO: caricare il valore della magia
    console.log('FormManagerComponent ngOnChanges');
  }

  saveSpell() {
    const newSpell: Spell = {};
    const formValue = this.spellForm.value;
    newSpell.name = formValue.name;
    newSpell.level = formValue.level;
    newSpell.school = formValue.school;
    this.spellForm.reset();
    console.log('nuova spell:', newSpell);
  }
}
