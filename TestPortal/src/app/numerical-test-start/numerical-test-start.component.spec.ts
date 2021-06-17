import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalTestStartComponent } from './numerical-test-start.component';

describe('NumericalTestStartComponent', () => {
  let component: NumericalTestStartComponent;
  let fixture: ComponentFixture<NumericalTestStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalTestStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalTestStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
