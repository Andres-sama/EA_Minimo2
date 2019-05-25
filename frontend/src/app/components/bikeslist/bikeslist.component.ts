import { Component, OnInit } from '@angular/core';
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
  selector: 'app-bikes',
  templateUrl: './bikeslist.component.html',
  styleUrls: ['./bikeslist.component.scss'],
  //template: 'The href is: {{href}} The idurl is: {{_idurl}}'
})export class BikeslistComponent implements OnInit {
  bikes: Bikes[];
  bikes2: Bikes[];
  bikeID: string;
  constructor(private BikesService: BikesService, private router: Router) {
   }

  ngOnInit() {
    this.getBikes()
    this.getBikesnot();
  }
  getBikes() {
    this.BikesService.getBikes().subscribe(res =>{
        this.bikes = res;
      });
    console.log("lista de bikes funciona"+this.bikes);
  }
  getBikesnot() {
    this.BikesService.getBikesnot()
      .subscribe(res => {
        this.bikes2 = res
        console.log("lista de bikes no asignadas funciona " + this.bikes2)
      });
  }
}