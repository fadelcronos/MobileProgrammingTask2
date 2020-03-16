import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Assignment8FadelPage } from './assignment8-fadel.page';

describe('Assignment8FadelPage', () => {
  let component: Assignment8FadelPage;
  let fixture: ComponentFixture<Assignment8FadelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment8FadelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Assignment8FadelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
