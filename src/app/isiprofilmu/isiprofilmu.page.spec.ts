import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsiprofilmuPage } from './isiprofilmu.page';

describe('IsiprofilmuPage', () => {
  let component: IsiprofilmuPage;
  let fixture: ComponentFixture<IsiprofilmuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiprofilmuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsiprofilmuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
