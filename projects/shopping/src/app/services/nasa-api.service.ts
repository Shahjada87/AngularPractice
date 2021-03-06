import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {



  constructor(private http: HttpClient) {}
    nasaApiGetUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

    GetPhotos():Observable<any[]>{
      return this.http.get<any>(this.nasaApiGetUrl);
    }

}
