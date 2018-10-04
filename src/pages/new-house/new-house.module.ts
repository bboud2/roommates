import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHousePage } from './new-house';

@NgModule({
  declarations: [
    NewHousePage,
  ],
  imports: [
    IonicPageModule.forChild(NewHousePage),
  ],
})
export class NewHousePageModule {}
