import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReusable } from './angular-reusable';

describe('AngularReusable', () => {
  let component: AngularReusable;
  let fixture: ComponentFixture<AngularReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
