import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Assignment10fadelPage } from './assignment10fadel.page';

describe('Assignment10fadelPage', () => {
  let component: Assignment10fadelPage;
  let fixture: ComponentFixture<Assignment10fadelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment10fadelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Assignment10fadelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
