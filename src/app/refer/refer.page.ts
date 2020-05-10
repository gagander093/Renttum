import { Component, OnInit } from '@angular/core';
import { ThankYouModalComponent } from '../components/thank-you-modal/thank-you-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.page.html',
  styleUrls: ['./refer.page.scss'],
})
export class ReferPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async doRefer() {
    const modal = await this.modal.create({
      component: ThankYouModalComponent,
      componentProps: {

      },
      backdropDismiss: true,
      showBackdrop: true,
      cssClass: 'modal-centered'
    });

    modal.present();
  }

}
