import { Component, OnInit } from '@angular/core';
import { FakeStoreApiService } from '../../services/fake-store-api.service';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit {

constructor(private shopapi:FakeStoreApiService) { }

products:any[] = [];
categories:any[] = [];

  ngOnInit(): void {
    this.shopapi.GetProducts().subscribe(obj => this.products = obj);
    this.shopapi.GetCategories().subscribe(obj => this.categories = obj);
  }


selectedCategories = "Select a Category";
}
 