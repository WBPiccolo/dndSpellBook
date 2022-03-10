import { Spell } from '../shared/spell';

export const mockSpell: Spell = {
  name: 'Eldritch Blast',
  level: 'cantrip',
  school: 'Abjuration',
  castingTime: '1 action',
  range: 'Self',
  duration: '1 round',
  components: {
    verbal: true,
    somatic: true,
  },
  description:
    'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
  source: "Player's Handbook",
};

export const mockSpellbook: Spell[] = [
  {
    name: 'Eldritch Blast',
    level: 'cantrip',
    school: 'Abjuration',
    castingTime: '1 action',
    range: 'Self',
    duration: '1 round',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
    source: "Player's Handbook",
  },
  {
    name: 'False Life',
    level: '1st',
    school: 'Necromancy',
    castingTime: '1 action',
    range: 'Self',
    duration: '1 hour',
    components: {
      verbal: true,
      somatic: true,
      materials: ['a small amount of alcohol or distilled spirits'],
    },
    description:
      'Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.',
    atHigherLevels:
      ' When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.',
    source: "Player's Handbook",
  },
];
