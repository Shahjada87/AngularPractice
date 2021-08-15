import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent {
  btnId ='';
  btnName = '';
  btnClass = '';
  xPosition = '';
  InsertClick(e:any){
    this.btnId = e.target.id;
    this.btnName = e.target.name;
    this.btnClass = e.target.className;
    this.xPosition = e.clientX;
  }
}
