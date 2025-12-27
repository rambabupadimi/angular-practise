import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTwo } from './temp-two';

describe('TempTwo', () => {
  let component: TempTwo;
  let fixture: ComponentFixture<TempTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
