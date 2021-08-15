import { Component, OnInit } from '@angular/core';
import { UnilistapiService } from '../../services/unilistapi.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private data: UnilistapiService) { }

  universities : any[] =[];

  ngOnInit(): void {
    this.data.GetUniList().subscribe(data => this.universities = data );
  }

}
