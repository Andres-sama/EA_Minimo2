import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";
import { NgIf } from '@angular/common';
declare var M: any


@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.scss'],
})
export class AddbikeComponent implements OnInit {
  public href: string = "";
  public _idurl: string;
  station: Stations;
  bikes: Bikes[];
  bikes2: Bikes[];
  bikeID: string;
  stationID: string;
  constructor(private StationService: StationService,private BikesService: BikesService, private router: Router) {
    this.station = new Stations();
   }

  ngOnInit() {
    //obtenemos la url
    this.href = this.router.url;
    //console.log("url is:" + this.router.url);
    //sacamos el _id de la station
    this._idurl = this.href.substr(14);
    //console.log("(27): "+ this.href.substr(27));
    //inciamos la función de listar por id
    //this.station._id = this._idurl;
  }

  addBike(_id: string){
    if(confirm ('Are you sure you want to add it?')){
      this.bikeID = _id;
      this.StationService.addBike(this._idurl, this.bikeID).subscribe(res => {
        M.toast({html: 'Added successfully'});
      });
    }
  }
  getBikesnot() {
    this.BikesService.getBikesnot()
      .subscribe(res => {
        this.bikes2 = res
        console.log("lista de bikes no asignadas funciona " + this.bikes2)
      });
  }
}
