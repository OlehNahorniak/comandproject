import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.scss'],
  animations: [illuminat]
})
export class Component8Component implements OnInit {
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
