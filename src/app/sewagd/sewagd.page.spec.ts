import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SewagdPage } from './sewagd.page';

describe('SewagdPage', () => {
  let component: SewagdPage;
  let fixture: ComponentFixture<SewagdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewagdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SewagdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
