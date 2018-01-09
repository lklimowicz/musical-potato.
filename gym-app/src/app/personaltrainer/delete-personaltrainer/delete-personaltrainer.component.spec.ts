import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonaltrainerComponent } from './delete-personaltrainer.component';

describe('DeletePersonaltrainerComponent', () => {
  let component: DeletePersonaltrainerComponent;
  let fixture: ComponentFixture<DeletePersonaltrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonaltrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonaltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
