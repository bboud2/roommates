import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HouseModel} from "../../Models/HouseModel";

/**
 * Generated class for the HousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house: HouseModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.house = navParams.get('house');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousePage');
  }

}
