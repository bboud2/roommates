import {HouseModel} from "../Models/HouseModel";
/**
 * Created by Ben on 10/1/2018.
 */


export class HouseService {
  private homes: HouseModel[] = [];

  addHome(home: HouseModel) {
    this.homes.push(home);
  }

  getHomes() {
    return this.homes.slice();
  }
}
