import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsPackagesPayPage } from './ads-packages-pay.page';

describe('AdsPackagesPayPage', () => {
  let component: AdsPackagesPayPage;
  let fixture: ComponentFixture<AdsPackagesPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsPackagesPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsPackagesPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
