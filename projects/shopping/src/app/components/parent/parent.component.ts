import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  ParentMessage:string = "Hello from Parent!!";
  ParentMessage2:string ="hello again :)";

  Messages:string = "Waiting for message from child";

  CollectMessage(msg:any){
    this.Messages = msg;
  }

  Mobile:any= {};

  CollectObject(obj:any){
    this.Mobile = obj;
  }
}
