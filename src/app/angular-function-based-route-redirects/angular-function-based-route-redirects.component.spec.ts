import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFunctionBasedRouteRedirectsComponent } from './angular-function-based-route-redirects.component';

describe('AngularFunctionBasedRouteRedirectsComponent', () => {
  let component: AngularFunctionBasedRouteRedirectsComponent;
  let fixture: ComponentFixture<AngularFunctionBasedRouteRedirectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFunctionBasedRouteRedirectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFunctionBasedRouteRedirectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
