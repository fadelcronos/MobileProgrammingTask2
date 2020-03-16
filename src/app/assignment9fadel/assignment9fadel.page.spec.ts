import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Assignment9fadelPage } from './assignment9fadel.page';

describe('Assignment9fadelPage', () => {
  let component: Assignment9fadelPage;
  let fixture: ComponentFixture<Assignment9fadelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment9fadelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Assignment9fadelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
