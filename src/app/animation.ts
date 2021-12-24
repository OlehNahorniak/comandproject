import { animate, state, style, transition, trigger } from "@angular/animations";

export const illuminat = trigger(
  'illumination', [
  state(
    'illuminat',
    style({
      boxShadow: '0 0 15px #00aaff',
      border: '0.1px solid #00aaff'
    })),
  state('normal',
    style({
      boxShadow: 'none',
      border: 'none'
    })),
  transition('* => illuminat', [
    animate('0.5s')
  ]),
  transition('* => normal', [
    animate('0.5s')
  ]),
]
);
