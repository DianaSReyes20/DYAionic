import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkedPage } from './linked';

@NgModule({
  declarations: [
    LinkedPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkedPage),
  ],
})
export class LinkedPageModule {}
