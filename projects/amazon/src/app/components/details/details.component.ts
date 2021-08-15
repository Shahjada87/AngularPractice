import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  Id:any;
  Name:any;
  Price:any;

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.Name = this.route.snapshot.paramMap.get('name');
    this.Price = this.route.snapshot.paramMap.get('price');
  }

}
