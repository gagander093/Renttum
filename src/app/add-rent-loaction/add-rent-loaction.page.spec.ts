import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRentLoactionPage } from './add-rent-loaction.page';

describe('AddRentLoactionPage', () => {
  let component: AddRentLoactionPage;
  let fixture: ComponentFixture<AddRentLoactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentLoactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRentLoactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
