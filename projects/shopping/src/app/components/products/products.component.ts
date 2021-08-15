import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  data:any[] = [];

  constructor(private dataservice:DataService){
    this.data = this.dataservice.GetProdcuts();
  }

}
