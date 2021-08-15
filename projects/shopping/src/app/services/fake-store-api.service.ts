import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  constructor(private http: HttpClient) { }

  fakeStoreApiUrl ='https://fakestoreapi.com/products';
  categoriesUrl = 'https://fakestoreapi.com/products/categories';

  GetProducts():Observable<any[]>{
    return this.http.get<any[]>(this.fakeStoreApiUrl);
  }

  GetCategories():Observable<any[]>{
    return this.http.get<any[]>(this.categoriesUrl);
  }

} 
