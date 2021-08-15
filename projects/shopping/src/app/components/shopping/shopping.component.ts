import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  showCart = false;
  ToggleCart() {
    this.showCart = (this.showCart == false) ? true : false;
  }

  places = [
    "Select a category", "Middle-East", "America", "Asia"
  ];

  middleEast = ["Select Middle-east countries", "Turkey", "Qustuntunia", "Dubai"];
  america = ["Select American countries", "Chicago", "NYC", "Las Vegas"];
  asia = ["Select Asian countries", "India", "Japan", "Maldives"];

  countries:any[] = [];

  data = [
    {Name:'Turkey', Price:'500k', Pic:"assets/Amazing-Ship-HD-Desktop-Wallpaper.jpg"},
    {Name:'Qustuntunia', Price:'1.25 million', Pic:"assets/Antranias_A Tiny House With Ivy Flowers_YkViSWo.jpg"},
    {Name:'Japan', Price:'900k', Pic:"assets/awesome_japan_city_tokyo_wallpaper_hd_4.jpg"},
    {Name:'Water City', Price:'1.1 million', Pic:"assets/beautiful-water-city.jpg"},
    {Name:'Dubai', Price:'860k', Pic:"assets/city-highways-night.jpg"},
    {Name:'NYC', Price:'1.5 million', Pic:"assets/city-lights-hd-wallpaper-15.jpg"},
    {Name:'Las Vegas', Price:'1.0 million', Pic:"assets/New-York-City-HD-Wallpapers-1080p-1.jpg"},
    {Name:'Chicago', Price:'1.0 million', Pic:"assets/New-York-City-HD-Wallpapers-1080p-7.jpg"},
    {Name:'India', Price:'1.0 million', Pic:"assets/New-York-City-HD-Wallpapers-1080p-5.jpg"},
    {Name:'Maldives', Price:'1.0 million', Pic:"assets/Sailboat-HD-Desktop-Wallpaper.jpg"},
  ];

  cartItems:any = [];
  cartItemsCounts = 0 ;
  getCount(){
    this.cartItemsCounts = this.cartItems.length;
  }

  selectedCountry = "Select a country";

  onCategoryChange() {
    switch (this.selectedCountry) {
      case "Middle-East":
        this.countries = this.middleEast;
        break;
      case "America":
        this.countries = this.america;
        break;
      case "Asia":
        this.countries = this.asia;
        break;
      default:
        this.countries = ["Please select a country!!"];
        break;
    }

  }
  selectedPlaces = "Select best places";

  searchedPlaces:any = {
    Name: '',
    Price: 0,
    Pic : ''
  }
  ;

  onPlaceChange(){
    this.searchedPlaces = this.data.find(place=> place.Name==this.selectedPlaces);
  }

  AddToCartClick(){
    this.cartItems.push(this.searchedPlaces);
    this.getCount();
    alert("Destination added to cart!!!")
  }

  RemovePlacesOnClcik(index:number){
    let c = confirm("Are you sure want to delete this item?")
    if (c == true){
      this.cartItems.splice(index,1);
    }
    this.getCount();
  }


}
