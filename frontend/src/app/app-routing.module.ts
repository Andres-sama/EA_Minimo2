import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { StationsComponent } from './components/stations/stations.component';
import { MainComponent } from "./components/main/main.component";
import { NewbikeComponent } from "./components/newbike/newbike.component";
import { DeletebikeComponent } from "./components/deletebike/deletebike.component";
import { AddbikeComponent } from "./components/addbike/addbike.component";
import { BikesComponent } from "./components/bikes/bikes.component";
import { BikeslistComponent } from "./components/bikeslist/bikeslist.component";

const routes: Routes = [
  {path: 'api/stations', component: StationsComponent},
  {path: 'api/stations/list', component: StationsComponent},
  {path: 'relacion/add/:id', component:AddbikeComponent},
  {path: 'relacion/delete/:id', component: DeletebikeComponent},
  {path: 'stationslist', component: StationsComponent},
  {path: 'bikesList', component: BikeslistComponent},
  {path: 'stationslist/stationBikes/:id', component: BikesComponent},
  {path: 'stationslist/stationBikes/:id', component: BikesComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
