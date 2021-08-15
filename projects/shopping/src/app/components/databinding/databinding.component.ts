import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  Name = 'TV';
  Price = 0;
  ShippedTo = 'Hyd';
  InStock = false;
}
