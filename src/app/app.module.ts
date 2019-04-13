import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { RouterModule, Routes } from '@angular/router';

// Service
import { DataService } from './services/data.service';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { StockItemComponent } from './store/stock-item/stock-item.component'
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './header/nav/nav.component';
import { FeaturedProductsComponent  } from './feature-products/feature-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
     {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'store', component: StoreComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    StoreComponent,
    StockItemComponent,
    ContactComponent,
    NavComponent,
    FeaturedProductsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
