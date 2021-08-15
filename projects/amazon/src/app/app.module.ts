import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MiddleeastComponent } from './components/middleeast/middleeast.component';
import { AmericaComponent } from './components/america/america.component';
import { AsiaComponent } from './components/asia/asia.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JewelleryComponent } from './components/jewellery/jewellery.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiddleeastComponent,
    AmericaComponent,
    AsiaComponent,
    NotfoundComponent,
    DestinationsComponent,
    JewelleryComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
