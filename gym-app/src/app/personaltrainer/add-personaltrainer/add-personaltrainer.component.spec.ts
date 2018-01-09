import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonaltrainerComponent } from './add-personaltrainer.component';

describe('AddPersonaltrainerComponent', () => {
  let component: AddPersonaltrainerComponent;
  let fixture: ComponentFixture<AddPersonaltrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonaltrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonaltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
