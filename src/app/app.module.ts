import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ServiceComponent } from './views/service/service.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ServiceoneComponent } from './views/serviceone/serviceone.component';
import { ServicetwoComponent } from './views/servicetwo/servicetwo.component';
import { ServicethreeComponent } from './views/servicethree/servicethree.component';
import { ServicefourComponent } from './views/servicefour/servicefour.component';
import { ServicefiveComponent } from './views/servicefive/servicefive.component';
import { ServicesexComponent } from './views/servicesex/servicesex.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    ServiceoneComponent,
    ServicetwoComponent,
    ServicethreeComponent,
    ServicefourComponent,
    ServicefiveComponent,
    ServicesexComponent,
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}