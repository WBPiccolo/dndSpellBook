export interface Spell {
  name?: string;
  level?: string;
  school?: string;
  castingTime?: string;
  range?: string;
  duration?: string;
  components?: {
    verbal?: boolean;
    somatic?: boolean;
    material?: string[];
  };
  description?: string;
  atHigherLevels?: string;
  isRitual?: boolean;
  source?: string;
}
