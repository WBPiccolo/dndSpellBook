export enum CardType {
  SPELL = 'Spell',
  ABILITY = 'Ability',
}

export interface Spell {
  name?: string;
  level?: number;
  school?: string;
  castingTime?: string;
  range?: string;
  duration?: string;
  components?: {
    verbal?: boolean;
    somatic?: boolean;
    materials?: string[];
  };
  description?: string;
  atHigherLevels?: string;
  isRitual?: boolean;
  source?: string;
  requiresConcentration?: boolean;
}

export interface Ability {
  name?: string;
  source?: string;
}
