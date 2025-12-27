import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPi } from './angular-pi';

describe('AngularPi', () => {
  let component: AngularPi;
  let fixture: ComponentFixture<AngularPi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
