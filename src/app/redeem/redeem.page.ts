import { Component, OnInit } from '@angular/core';
import { RedeemModalComponent } from '../components/redeem-modal/redeem-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async doRedeem() {
    const modal = await this.modal.create({
      component: RedeemModalComponent,
      componentProps: {

      },
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modal-centered'
    });

    modal.present();
  }

}
