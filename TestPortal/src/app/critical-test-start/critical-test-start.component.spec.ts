import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalTestStartComponent } from './critical-test-start.component';

describe('CriticalTestStartComponent', () => {
  let component: CriticalTestStartComponent;
  let fixture: ComponentFixture<CriticalTestStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalTestStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalTestStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
