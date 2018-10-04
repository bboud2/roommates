import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewHousePage} from "../new-house/new-house";
import {HouseModel} from "../../Models/HouseModel";
import {HouseService} from "../../Services/HouseService";
import {HousePage} from "../house/house";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private houses: HouseModel[] = [];

  constructor(public navCtrl: NavController, private homeService: HouseService) {
  }

  ionViewWillEnter() {
    this.houses = this.homeService.getHomes();
  }

  onLoadNewHouse() {
    this.navCtrl.push(NewHousePage);
  }

  onHouseClick(house: HouseModel) {
    console.log("onHouseClick()");
    this.navCtrl.push(HousePage, {
      house: house
    });
  }
}
