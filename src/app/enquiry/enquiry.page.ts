import { Component, OnInit } from '@angular/core';
import { ThankYouModalComponent } from '../components/thank-you-modal/thank-you-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.page.html',
  styleUrls: ['./enquiry.page.scss'],
})
export class EnquiryPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async doEnquiry() {
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
