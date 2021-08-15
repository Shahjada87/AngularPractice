import { Component, OnInit } from '@angular/core';
import {NasaApiService} from '../../services/nasa-api.service'
@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.css']
})
export class MarsphotosComponent implements OnInit {

  constructor( private nasaApi: NasaApiService) { }


  responseObject:any = {
    photos: []
  }

  ngOnInit(): void {
    this.nasaApi.GetPhotos().subscribe(obj => this.responseObject = obj)
  }

}
