import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRedirect } from './route-redirect';

describe('RouteRedirect', () => {
  let component: RouteRedirect;
  let fixture: ComponentFixture<RouteRedirect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteRedirect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteRedirect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
