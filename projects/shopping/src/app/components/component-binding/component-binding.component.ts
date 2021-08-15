import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-binding',
  templateUrl: './component-binding.component.html',
  styleUrls: ['./component-binding.component.css']
})
export class ComponentBindingComponent{
    BackgroundColor:any = 'yellow';
    Alignment:any ='center';
    StyleObject={
      'background-color': this.BackgroundColor,
      'color': 'rgb(255, 0, 212)',
      'text-align': 'center',
      'box-shadow': '2px 5px 2px pink',
      'border': '2px solid yellow'
    }
    OnBackgroundChnage(){
      this.StyleObject = {
        'background-color': this.BackgroundColor,
        'color': 'red',
        'text-align': this.Alignment,
        'box-shadow': '2px 5px 2px green',
        'border': '2px solid blue`'
      }
    }
    GetEffects(){
      return {
        'color': 'green',
        'text-align': 'center'
      }
    }
  }
