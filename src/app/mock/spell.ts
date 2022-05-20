import { Spell } from '../shared/sharedTypes';

export const mockSpell: Spell = {
  name: 'Eldritch Blast',
  level: 0,
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
    name: 'Mano Magica',
    level: 0,
    school: 'Evocazione',
    castingTime: '1 azione',
    range: '9 metri',
    duration: '1 minuto',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      "Una mano spettrale e fluttuante appare nel punto scelto all'interno del raggio. La mano dura per la durata o fino a quando non la scartate come azione. La mano svanisce se è mai più di 9 metri di distanza da te o se lanci di nuovo questo incantesimo.Puoi usare la tua azione per controllare la mano.",
  },
  {
    name: 'Deflagrazione Occulta',
    level: 0,
    school: 'Invocazione',
    castingTime: '1 action',
    range: '36 metri',
    duration: 'Istantanea',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      'Un raggio di energia crepitante sfreccia verso una creatura entro gittata.' +
      "L'incantatore effettua un attacco a distanza con questo incantesimo contro il bersaglio. Se lo colpisce, il bersaglio subisce 1d10 danni da forza.\n" +
      "Quando l'incantatore arriva ai livelli superiori, l'incantesimo crea più raggi: due raggi al 5° livello, tre raggi all'11° livello e quattro raggi al 17° livello.",
  },
  {
    name: 'Salvare i Morenti',
    level: 0,
    school: 'Necromancy',
    castingTime: '1 azione',
    range: 'Contatto',
    duration: 'Istantanea',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      "L'incantatore tocca una creatura vivente a 0 punti ferita.\n" +
      'Quella creatura diventa stabile.\n' +
      'Questo incantesimo non ha effetto sui costrutti o sui non morti.',
  },
  {
    name: 'Randello incantato',
    level: 0,
    school: 'Trasmutazione',
    castingTime: '1 azione bonus',
    range: 'Contatto',
    duration: '1 minuto',
    components: {
      verbal: true,
      somatic: true,
      materials: [
        'vischio',
        'una foglia di quadrifoglio',
        'un randello o bastone da combattimento',
      ],
    },
    description:
      'Il legno di un randello o bastone da combattimento che stai impugnando viene infuso del potere della natura.' +
      'Per la durata dell’incantesimo, usando quell’arma puoi usare la tua caratteristica da incantatore al posto della Forza per i tiri per colpire e danno da mischia,' +
      'e il dado di danno dell’arma diventa un d8. L’arma diventa anche magica, se già non lo è. L’incantesimo ha termine se lo lanci di nuovo o se lasci l’arma.',
  },
  {
    name: 'Guida',
    level: 0,
    school: 'Divinazione',
    castingTime: '1 azione',
    range: 'Contatto',
    duration: '1 minuto',
    requiresConcentration: true,
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      'Lanci l’incantesimo a contatto di una creatura consenziente. Una volta, prima che l’incantesimo termini,' +
      'il bersaglio può tirare un d4 e sommare il risultato tirato a una prova di caratteristica a sua scelta.' +
      'Può tirare il dado prima o dopo aver effettuato la prova di caratteristica. L’incantesimo ha poi termine.',
  },
  {
    name: 'Intimorire Infernale',
    level: 1,
    school: 'Invocazione',
    castingTime: '1 reazione',
    range: '18 metri',
    duration: 'Istantanea',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      "L'incantatore punta l'indice contro la creatura che gli ha inferto danni e quella creatura è momentaneamente avviluppata da una cortina di fiamme infernali." +
      'La creatura deve effettuare un tiro salvezza su Destrezza. Se lo fallisce, subisce 2d10 danni da fuoco, mentre se lo supera, subisce soltanto la metà di quei danni.',
    atHigherLevels:
      "Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2° livello o superiore, i danni aumentano di 1d10 per ogni slot di livello superiore al 1°.",
  },
  {
    name: 'Sortilegio',
    level: 1,
    school: 'Ammaliamento',
    castingTime: '1 azione bonus',
    range: '27 m',
    duration: 'fino a 1 ora',
    requiresConcentration: true,
    components: {
      verbal: true,
      somatic: true,
      materials: ["l'occhio pietrificato di un girino"],
    },
    description:
      "L'incantatore scaglia una maledizione su una creatura entro gittata e che egli sia in grado di vedere." +
      "Finché l'incantesimo non termina, l'incantatore infligge 1d6 danni necrotici extra al bersaglio ogni volta che lo colpisce con un attacco. Inoltre, quando l'incantatore lancia l'incantesimo, sceglie una caratteristica. Il bersaglio subisce svantaggio alle prove di caratteristica effettuate con la caratteristica scelta." +
      "Se il bersaglio scende a 0 punti ferita prima che questo incantesimo termini, l'incantatore può usare un'azione bonus in un suo turno successivo per maledire una nuova creatura." +
      'Un incantesimo rimuovi maledizione lanciato sul bersaglio termina questo incantesimo prematuramente.',
    atHigherLevels:
      "Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3° o 4° livello, può mantenere la concentrazione sull'incantesimo fino a un massimo di 8 ore. Quando usa uno slot incantesimo di 5° livello o superiore, può mantenere la concentrazione sull'incantesimo fino a un massimo di 24 ore.",
  },
  {
    name: 'Braccia di Hadar',
    level: 1,
    school: 'Evocazione',
    castingTime: '1 action',
    range: 'Self (3 metri)',
    duration: 'Istantanea',
    components: {
      verbal: true,
      somatic: true,
    },
    description:
      "L'incantatore invoca il potere di Hadar, la Fame Oscura." +
      'Dalla sua persona si protendono alcuni tentacoli di energia oscura che tempestano di colpi tutte le creature entro 3 metri da lui.' +
      "Ogni creatura in quell'area deve effettuare un tiro salvezza su Forza. Se lo fallisce, subisce 2d6 danni necrotici e non può effettuare reazioni fino al suo turno successivo. Se lo supera, subisce soltanto la metà di quei danni, ma non subisce altri effetti.",
    atHigherLevels:
      "Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2° livello o superiore, i danni aumentano di 1d6 per ogni slot superiore al 1°.",
  },
  {
    name: 'Passo Velato',
    level: 2,
    school: 'Evocazione',
    castingTime: '1 azione bonus',
    range: 'Self',
    duration: 'Istantanea',
    components: {
      verbal: true,
    },
    description:
      'Avvolto rapidamente da una foschia argentata, ti teletrasporti di massimo 9 metri in uno spazio non occupato che puoi vedere.',
  },
];
