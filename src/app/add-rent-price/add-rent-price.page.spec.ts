import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRentPricePage } from './add-rent-price.page';

describe('AddRentPricePage', () => {
  let component: AddRentPricePage;
  let fixture: ComponentFixture<AddRentPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRentPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
