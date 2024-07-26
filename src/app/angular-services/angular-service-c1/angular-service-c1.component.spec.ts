import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularServiceC1Component } from './angular-service-c1.component';

describe('AngularServiceC1Component', () => {
  let component: AngularServiceC1Component;
  let fixture: ComponentFixture<AngularServiceC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularServiceC1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularServiceC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
