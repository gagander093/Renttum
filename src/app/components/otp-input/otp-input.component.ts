import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
})
export class OtpInputComponent implements OnInit {

  @Input() otpModel: any;
  
  @Output() otpModelChange = new EventEmitter<string>();

  otp = ['', '', '', '']

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const otpModel: SimpleChange = changes.otpModel;
    const val = otpModel.currentValue || '';

    if (val && (val.length == 4) && (val != this.otp.join(''))) {
      this.otp = val.split('');
    }
  }

  modelChange() {
    this.otpModelChange.emit(this.otp.join(''));
  }

  focus(ev, elNxt) {
    var key = ev.keyCode || ev.charCode;

    if( key != 8 && key != 46 ) {
      setTimeout(() => {
        if (elNxt) elNxt.setFocus();
      }, 20);
    }
  }

  focusPrev(ev, elPrv) {
    var key = ev.keyCode || ev.charCode;

    if( key == 8 || key == 46 ) {
      setTimeout(() => {
        if (elPrv) elPrv.setFocus();
      }, 20);
    }
  }

}
