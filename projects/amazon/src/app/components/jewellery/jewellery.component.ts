import { Component, OnInit } from '@angular/core';
import { UnilistapiService } from '../../services/unilistapi.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {

  constructor(private datas:UnilistapiService) { }

  products: any[] =[];

  ngOnInit(): void {
    this.datas.GetJewelleryList().subscribe(data => this.products = data);
  }

}
