import {PopmotionEasing} from 'animate-css-grid/dist/types';

export interface WrapGridConfig {
  duration?: number;
  stagger?: number;
  easing?: keyof PopmotionEasing;
}
