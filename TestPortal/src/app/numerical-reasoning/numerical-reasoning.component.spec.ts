import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalReasoningComponent } from './numerical-reasoning.component';

describe('NumericalReasoningComponent', () => {
  let component: NumericalReasoningComponent;
  let fixture: ComponentFixture<NumericalReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalReasoningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
