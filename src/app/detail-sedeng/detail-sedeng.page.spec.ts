import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSedengPage } from './detail-sedeng.page';

describe('DetailSedengPage', () => {
  let component: DetailSedengPage;
  let fixture: ComponentFixture<DetailSedengPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSedengPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSedengPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
