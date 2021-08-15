import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnilistapiService {

  apiUrl = 'https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY';

  jewelleryApi = "https://fakestoreapi.com/products/category/jewelery";

  constructor(private http: HttpClient) { }

  GetUniList():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  GetJewelleryList():Observable<any[]>{
    return this.http.get<any[]>(this.jewelleryApi);
  }

}
