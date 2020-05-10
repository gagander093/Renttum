import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferPage } from './refer.page';

describe('ReferPage', () => {
  let component: ReferPage;
  let fixture: ComponentFixture<ReferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
