import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section1Component } from './section1/section1.component';
import { Section1MidComponent } from './section1-mid/section1-mid.component';
import { FooterComponent } from './footer/footer.component';
// import { Section5Component } from './section5/section5.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section1Component,
    Section1MidComponent,
    FooterComponent,
    // Section5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
