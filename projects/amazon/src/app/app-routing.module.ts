import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AmericaComponent } from './components/america/america.component';
import { AsiaComponent } from './components/asia/asia.component';
import { MiddleeastComponent } from './components/middleeast/middleeast.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { JewelleryComponent } from './components/jewellery/jewellery.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "middleeast", component: MiddleeastComponent},
  {path: "america", component: AmericaComponent},
  {path: "asia", component: AsiaComponent},
  {path: 'jewellery', component: JewelleryComponent},
  {path: 'details/:id/:name/:price', component: DetailsComponent},
  {path: "destinations", component: DestinationsComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: '**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
