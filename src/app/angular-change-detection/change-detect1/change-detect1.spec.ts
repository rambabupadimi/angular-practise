import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetect1 } from './change-detect1';

describe('ChangeDetect1', () => {
  let component: ChangeDetect1;
  let fixture: ComponentFixture<ChangeDetect1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetect1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetect1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
