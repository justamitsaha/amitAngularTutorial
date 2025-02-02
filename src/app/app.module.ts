import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InoutComponent } from './components/inout/inout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildComponent } from './components/inout/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InoutComponent,
    NavbarComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
