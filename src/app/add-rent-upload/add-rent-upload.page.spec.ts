import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRentUploadPage } from './add-rent-upload.page';

describe('AddRentUploadPage', () => {
  let component: AddRentUploadPage;
  let fixture: ComponentFixture<AddRentUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentUploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRentUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
