import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundCalculatorComponent } from './compound-calculator.component';

describe('CompoundCalculatorComponent', () => {
  let component: CompoundCalculatorComponent;
  let fixture: ComponentFixture<CompoundCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoundCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
