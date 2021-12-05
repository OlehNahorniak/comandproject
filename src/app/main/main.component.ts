import { Component,  OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[
    trigger('text' , [ 
      state('start',style({
        fontStyle: 'italic'
    })),
    state('end',style({
      fontStyle: 'normal'
    })),
    transition('start => end', animate(1500)),
    transition('end => start', animate(1500)),
    ]) ,
    trigger('color', [
      state('white', style({
        color: 'white'
      })),
      state('red', style({
        color: 'red'
      })),
      transition('white => red', animate(1500)),
    transition('red => white', animate(1500)),
    ])
  ]  
  
})
export class MainComponent implements OnInit {

  public textState ="start";
  public colorState = "white";

  constructor() { }

  ngOnInit(): void {
  }

  changeText(){    
    this.textState = 'end';
    setTimeout(() => {
      this.textState = 'start';
    } , 3000);
    }

  hoverIn(){
    this.textState = 'end';
  }
  hoverOut(){
    this.textState = 'start';
  }

changeColor(){    
    this.colorState = 'red';
    setTimeout(() => {
      this.colorState = 'white';
    } , 3000);
    }

}
