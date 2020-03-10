import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ServiceComponent } from './views/service/service.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import{ServiceoneComponent }from './views/serviceone/serviceone.component';
import{ServicetwoComponent} from './views/servicetwo/servicetwo.component';
import{ ServicethreeComponent} from './views/servicethree/servicethree.component';

import{ServicefourComponent} from './views/servicefour/servicefour.component';

import{ServicefiveComponent} from './views/servicefive/servicefive.component';

import{ServicesexComponent} from './views/servicesex/servicesex.component';



const routes: Routes = [

  // { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent},
  
  // { path: 'register', component : RegisterComponent},
  
  { path: 'service', component : ServiceComponent},
  
  { path: 'about', component : AboutComponent},
  
  { path: 'contact', component : ContactComponent},
    
  { path: 'serviceone', component : ServiceoneComponent},
  { path: 'servicetwo', component : ServicetwoComponent},
  { path: 'servicethree', component : ServicethreeComponent},
  { path: 'servicefour', component : ServicefourComponent},
  { path: 'servicefive', component : ServicefiveComponent},
  { path: 'servicesex', component : ServicesexComponent},
  
  { path: '',
  
  redirectTo:'/home',
  
  pathMatch:'full'
  
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
