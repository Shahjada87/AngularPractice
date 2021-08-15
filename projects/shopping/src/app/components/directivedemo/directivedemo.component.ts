import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {
  product = {
    Name: 'Nike Casuals',
    Price: 4600.66,
    InStock: true,
    Photo: 'assets/Amazing-Ship-HD-Desktop-Wallpaper.jpg',
    Description: 'something about nike casuals'
  };
  selectedView = 'details';
  views = ['details', 'preview', 'description'];
  count = 0;
  Show(e:any) {
    this.selectedView = e.target.name;
  }
  NextClick() {
    this.count++;
    this.selectedView = this.views[this.count];
    if (this.count == this.views.length) {
      this.selectedView = this.views[0];
    }
  }
  PreviousClick() {
    this.count--;
    this.selectedView = this.views[this.count];
  }
}
