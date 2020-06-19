import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiapakamuPage } from './siapakamu.page';

describe('SiapakamuPage', () => {
  let component: SiapakamuPage;
  let fixture: ComponentFixture<SiapakamuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiapakamuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiapakamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
