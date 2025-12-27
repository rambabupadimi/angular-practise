import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSecurity } from './angular-security';

describe('AngularSecurity', () => {
  let component: AngularSecurity;
  let fixture: ComponentFixture<AngularSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
