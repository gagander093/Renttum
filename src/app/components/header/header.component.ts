import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: String;

  @Input() showBack: boolean;

  @Input() canClick: boolean;

  @Output() backClick: EventEmitter<any>;

  constructor(
    private modal: ModalController
  ) {
    this.backClick = new EventEmitter();
  }

  async ngOnInit() { }

  async openSupportModal() {
    // const modal = await this.modal.create({
    //   component: SupportModalComponent,
    //   cssClass: 'support-modal',
    //   backdropDismiss: true,
    //   showBackdrop: true
    // });

    // modal.present();
  }

  onBackClick() {
    this.backClick.emit(true);
  }

}
