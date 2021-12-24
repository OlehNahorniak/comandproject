import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.scss'],
  animations: [illuminat]
})
export class Component7Component implements OnInit {
  illuminationState: 'normal' | 'illuminat' = 'normal';
  constructor() { }

  start() {
    this.illuminationState = 'illuminat';
  }

  end() {
    this.illuminationState = 'normal';
  }

  ngOnInit(): void {
  }

}
