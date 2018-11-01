import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintPage } from './complaint';

@NgModule({
  declarations: [
    ComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintPage),
  ],
})
export class ComplaintPageModule {}
