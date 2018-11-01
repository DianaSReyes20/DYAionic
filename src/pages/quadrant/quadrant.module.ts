import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuadrantPage } from './quadrant';

@NgModule({
  declarations: [
    QuadrantPage,
  ],
  imports: [
    IonicPageModule.forChild(QuadrantPage),
  ],
})
export class QuadrantPageModule {}
