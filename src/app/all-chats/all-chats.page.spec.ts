import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllChatsPage } from './all-chats.page';

describe('AllChatsPage', () => {
  let component: AllChatsPage;
  let fixture: ComponentFixture<AllChatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllChatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
