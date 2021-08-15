import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  GetProdcuts(){
    let data = [
    {Name:'Turkey', Price:'800k', Pic:"assets/Amazing-Ship-HD-Desktop-Wallpaper.jpg",Category:"Middle-East"},
    {Name:'Qustuntnia', Price:'1.25 million', Pic:"assets/Antranias_A Tiny House With Ivy Flowers_YkViSWo.jpg",Category:"Middle-East" },
    {Name:'Japan', Price:'900k', Pic:"assets/awesome_japan_city_tokyo_wallpaper_hd_4.jpg", Category:"Asia"},
    {Name:'Water City', Price:'1.1 million', Pic:"assets/beautiful-water-city.jpg", Category:"America"},
    {Name:'Dubai', Price:'860k', Pic:"assets/city-highways-night.jpg", Category:"Middle-East"},
    {Name:'NYC', Price:'1.5 million', Pic:"assets/city-lights-hd-wallpaper-15.jpg", Category:"America"}
    ];
    return data;
  }
}
