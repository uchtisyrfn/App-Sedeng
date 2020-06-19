import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilgdPage } from './profilgd.page';

describe('ProfilgdPage', () => {
  let component: ProfilgdPage;
  let fixture: ComponentFixture<ProfilgdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilgdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilgdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
