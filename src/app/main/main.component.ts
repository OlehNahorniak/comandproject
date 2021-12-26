import { Component, OnInit } from '@angular/core';
import { illuminat } from '../animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [illuminat]

})
export class MainComponent implements OnInit {
  illuminationState: 'normal' | 'illuminat' = 'normal';  

  constructor() { }

  ngOnInit(): void {
  } 

  start() {
    this.illuminationState = 'illuminat';
  }
  end() {
    this.illuminationState = 'normal';
  }

}
