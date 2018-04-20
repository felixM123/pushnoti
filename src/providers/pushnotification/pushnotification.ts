
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import  {Platform} from "ionic-angular";
@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
              public platform:Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }
    init_notifications(){
      if (this.platform.is('cordova')){
          this.oneSignal.startInit('de7796a4-43bc-4090-b66e-812901ce7a26', '905574651621');

          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

          this.oneSignal.handleNotificationReceived().subscribe(() => {
           // do something when notification is received
           console.log('Notificacion recibida');
          });

          this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
            console.log('Notificacio abierta');
          });

          this.oneSignal.endInit();
        }else{
          console.log('OnSignal on fuctional en Chrome');
        }
            }
}
