import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StationsComponent } from './components/stations/stations.component';
import { MainComponent } from './components/main/main.component';
import { NewbikeComponent } from './components/newbike/newbike.component';
import { DeletebikeComponent } from './components/deletebike/deletebike.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikeslistComponent } from './components/bikeslist/bikeslist.component';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    MainComponent,
    NewbikeComponent,
    BikesComponent,
    DeletebikeComponent,
    BikeslistComponent  
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
