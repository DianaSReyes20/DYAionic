import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertNotificationPage } from './alert-notification';

@NgModule({
  declarations: [
    AlertNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertNotificationPage),
  ],
})
export class AlertNotificationPageModule {}
