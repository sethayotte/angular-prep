import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DripCalculatorComponent } from './drip-calculator.component';

describe('DripCalculatorComponent', () => {
  let component: DripCalculatorComponent;
  let fixture: ComponentFixture<DripCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DripCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DripCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
