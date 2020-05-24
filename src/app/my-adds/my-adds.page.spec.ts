import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAddsPage } from './my-adds.page';

describe('MyAddsPage', () => {
  let component: MyAddsPage;
  let fixture: ComponentFixture<MyAddsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAddsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAddsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
