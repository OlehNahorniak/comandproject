import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss'],
  animations: [illuminat]
})
export class Component4Component implements OnInit {
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
