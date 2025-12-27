import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetect2 } from './change-detect2';

describe('ChangeDetect2', () => {
  let component: ChangeDetect2;
  let fixture: ComponentFixture<ChangeDetect2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetect2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetect2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
