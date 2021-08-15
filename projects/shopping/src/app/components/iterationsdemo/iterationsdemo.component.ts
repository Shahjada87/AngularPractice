import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationsdemo',
  templateUrl: './iterationsdemo.component.html',
  styleUrls: ['./iterationsdemo.component.css']
})
export class IterationsdemoComponent {
  categories =[ "All", "Electronics", "Footware", "Fashion" ];
  menu = [
    {Category: 'Electronics', Products:['Jbl', 'Boom']},
    {Category: 'Footware', Products:['Nike', 'Chappal']},
    {Category: 'Fashion', Products: ['Shirt', 'Pant']}
  ];

  travelPlaces =[ "All", "Middle-East", "America", "Asia" ];


  place=[
    {Name:'Turkey', Price:'500k', Pic:"assets/Amazing-Ship-HD-Desktop-Wallpaper.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East"},
    {Name:'Qustuntnia', Price:'1.25 million', Pic:"assets/Antranias_A Tiny House With Ivy Flowers_YkViSWo.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East" },
    {Name:'Japan', Price:'900k', Pic:"assets/awesome_japan_city_tokyo_wallpaper_hd_4.jpg", Likes: 0, Dislikes: 0, Category:"Asia"},
    {Name:'Water City', Price:'1.1 million', Pic:"assets/beautiful-water-city.jpg", Likes: 0, Dislikes: 0, Category:"America"},
    {Name:'Dubai', Price:'860k', Pic:"assets/city-highways-night.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East"},
    {Name:'NYC', Price:'1.5 million', Pic:"assets/city-lights-hd-wallpaper-15.jpg", Likes: 0, Dislikes: 0, Category:"America"}
  ];

  SelectedCategory='All';

  RemoveClick(index:number){
    let c = confirm("Are you sure want to delete this item?")
    if (c == true){
    this.place.splice(index,1);
    }
  }

  AddClick(){
    this. place=[
      {Name:'Turkey', Price:'500k', Pic:"assets/Amazing-Ship-HD-Desktop-Wallpaper.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East"},
      {Name:'Qustuntnia', Price:'1.25 million', Pic:"assets/Antranias_A Tiny House With Ivy Flowers_YkViSWo.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East" },
      {Name:'Japan', Price:'900k', Pic:"assets/awesome_japan_city_tokyo_wallpaper_hd_4.jpg", Likes: 0, Dislikes: 0, Category:"Asia"},
      {Name:'Water City', Price:'1.1 million', Pic:"assets/beautiful-water-city.jpg", Likes: 0, Dislikes: 0, Category:"America"},
      {Name:'Dubai', Price:'860k', Pic:"assets/city-highways-night.jpg", Likes: 0, Dislikes: 0, Category:"Middle-East"},
      {Name:'NYC', Price:'1.5 million', Pic:"assets/city-lights-hd-wallpaper-15.jpg", Likes: 0, Dislikes: 0, Category:"America"},
      {Name:'Las Vegas', Price:'1.0 million', Pic:"assets/New-York-City-HD-Wallpapers-1080p-1.jpg", Likes: 0, Dislikes: 0, Category:"America"}
    ];
  }
  TrackChange(index:number){
    return index;
  }


  LikesClick(item:any){
    item.Likes++;
  }
  DisLikesClick(item:any){
    item.Dislikes++;
  }
}
