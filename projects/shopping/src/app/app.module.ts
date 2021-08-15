import {enableProdMode} from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header.component';
import { LoginComponent } from './components/login/login.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivedemoComponent } from './components/directivedemo/directivedemo.component';
import { IterationsdemoComponent } from './components/iterationsdemo/iterationsdemo.component';
import { ComponentBindingComponent } from './components/component-binding/component-binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { EventdemoComponent } from './components/eventdemo/eventdemo.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriademoComponent } from './components/materiademo/materiademo.component';
import { fromEvent } from 'rxjs';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import {SentenCasePipe} from './pipes/sentencecase.pipe';
import { SortingPipe } from './pipes/sorting.pipe'
import { CaptchaService } from './services/captcha.service';
import { HttpClientModule } from '@angular/common/http';
import { MarsphotosComponent } from './components/marsphotos/marsphotos.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { CategoryPipe } from './pipes/category.pipe';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    DatabindingComponent,
    DirectivedemoComponent,
    IterationsdemoComponent,
    ComponentBindingComponent,
    ParentComponent,
    ChildComponent,
    EventdemoComponent,
    ShoppingComponent,
    ProductsComponent,
    FilterComponent,
    MateriademoComponent,
    PipedemoComponent,
    SentenCasePipe,
    SortingPipe,
    MarsphotosComponent,
    FakestoreComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FakestoreComponent]
})
export class AppModule { }
