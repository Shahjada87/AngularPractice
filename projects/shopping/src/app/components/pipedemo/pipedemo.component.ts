import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent{

  cities = ["Select", "Delhi", "Hyd", "Cuttack","Bhubaneswar", "Mumbai"]

  data:{[key:number]:string}= {
    1:"Shahjada",
    2: "Rayyan"
  }

  title:string = "Heavenly Destinations";
  places = {
    Name: "Turkey",
    Price: 50000,
    Mfd: new Date ("2021-07-17"),
    Sales: 0.279
  }

  products  = [
    {Name: 'Samsung Tv', City: 'Delhi'},
    {Name: 'Mobile', City: 'Mumbai'},
    {Name: 'Nike', City: 'Hyd'},
    {Name: 'Puma', City: 'Goa'},
  ];

  status= {
    'Hyd' : 'Delivery in 2 days',
    'Mumbai' : 'Same day delivery',
    'Delhi' : 'Not deliverible to this location',
    'other' : 'location will be updated soon'
  }

notifications:string[] = [];

notificationsMap: {[Key:string]: string} ={
  "=0":"No Messages", "=1":"1 New Messages", "other":"You have # New Messages"
  }

Message:string = "";
sendClick(){
  this.notifications.push(this.Message);
  this.Message='';
}
showMessages = false;
OnToggle(){
this.showMessages =(this.showMessages == false)?true:false;
}
  Msg:string = 'sHahjaDa iS a GooD boy.'
}
