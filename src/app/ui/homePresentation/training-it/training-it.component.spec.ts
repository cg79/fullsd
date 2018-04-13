import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingItComponent } from './training-it.component';

describe('TrainingItComponent', () => {
  let component: TrainingItComponent;
  let fixture: ComponentFixture<TrainingItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
