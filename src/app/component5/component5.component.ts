import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.scss'],
  animations: [illuminat]
})
export class Component5Component implements OnInit {

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
