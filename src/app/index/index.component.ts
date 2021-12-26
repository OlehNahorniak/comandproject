import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { illuminat } from '../animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    illuminat,
    trigger('text', [
      state('start', style({
        fontStyle: 'italic'
      })),
      state('end', style({
        fontStyle: 'normal'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate(1500)),
    ]),
    trigger('color', [
      state('white', style({
        color: 'white'
      })),
      state('purple', style({
        color: 'purple'
      })),
      transition('white => purple', animate(1500)),
      transition('purple => white', animate(1500)),
    ])
  ]
})
export class IndexComponent implements OnInit {
  illuminationState: 'normal' | 'illuminat' = 'normal';
  textState = "start";
  colorState = "white";
  constructor() { }

  ngOnInit(): void {
    
  }
  changeText() {
    this.textState = 'end';
    setTimeout(() => {
      this.textState = 'start';
    }, 3000);
  }

  hoverIn() {
    this.textState = 'end';
  }
  hoverOut() {
    this.textState = 'start';
  }
  start() {
    this.illuminationState = 'illuminat';
  }
  end() {
    this.illuminationState = 'normal';
  }

  changeColor() {
    this.colorState = 'purple';
    setTimeout(() => {
      this.colorState = 'white';
    }, 3000);
  }

}
