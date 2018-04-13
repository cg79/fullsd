import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruireComponent } from './instruire.component';

describe('InstruireComponent', () => {
  let component: InstruireComponent;
  let fixture: ComponentFixture<InstruireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
