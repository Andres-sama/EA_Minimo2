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
  items : Bikes[];
  itemsok : Bikes[];
  constructor(private BikesService: BikesService, private router: Router) {
    this.initializeItems();
   }
   initializeItems(){
    this.getBikes()
    this.items = this.bikes;
    this.itemsok = this.items;
   }
  ngOnInit() {
    this.getBikes()
    this.getBikesnot()
  }

  list(evt:any) {
    this.initializeItems();
    console.log("lista de bikes " + this.bikes)
    console.log("lista de items " + this.items)
    console.log("lista de itemsok " + this.itemsok)
    
    let val = evt.target.value;
  
    if (val && val.trim() != '') {
      this.itemsok = this.itemsok.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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