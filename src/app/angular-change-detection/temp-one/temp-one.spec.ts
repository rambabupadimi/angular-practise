import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempOne } from './temp-one';

describe('TempOne', () => {
  let component: TempOne;
  let fixture: ComponentFixture<TempOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
