import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsPackagesPage } from './ads-packages.page';

describe('AdsPackagesPage', () => {
  let component: AdsPackagesPage;
  let fixture: ComponentFixture<AdsPackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsPackagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsPackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
