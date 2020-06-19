import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsiprofilgdPage } from './isiprofilgd.page';

describe('IsiprofilgdPage', () => {
  let component: IsiprofilgdPage;
  let fixture: ComponentFixture<IsiprofilgdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiprofilgdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsiprofilgdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
