import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HouseService} from "../../Services/HouseService";
import {HouseModel} from "../../Models/HouseModel";


/**
 * Generated class for the NewHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-home',
  templateUrl: 'new-house.html',
})
export class NewHousePage {

  constructor(public navController: NavController, private homeService: HouseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHousePage');
  }

  onAddHome(value: {name: string}) {
    this.homeService.addHome(new HouseModel(value.name));
    this.navController.pop();
  }

}
