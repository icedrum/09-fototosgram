import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertCtr: AlertController) { }




  async aletaInformativa(message) {
    const alert = await this.alertCtr.create({
      //cssClass: 'my-custom-class',
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }






}
