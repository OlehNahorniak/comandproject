
import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  animations: [illuminat]
})


export class Component1Component implements OnInit {
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
