import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() Message:string = "Waiting for message from parent";
  @Input() width:string = "Hey :(";
  MessageToEmit:string ="Hello from child!!";

  @Output() SendMEssageToParent:EventEmitter<string> = new EventEmitter<string>();
  @Output() SendObjectToParent:EventEmitter<any> = new EventEmitter<any>();

  Product:any = {
    Name: "Iphone 13xPro",
    Price : 156300.00
  }

  onButtonClick(){
    this.SendMEssageToParent.emit(this.MessageToEmit);
    this.SendObjectToParent.emit(this.Product)
  }
}
