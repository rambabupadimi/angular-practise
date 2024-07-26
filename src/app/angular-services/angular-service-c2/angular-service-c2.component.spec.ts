import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularServiceC2Component } from './angular-service-c2.component';

describe('AngularServiceC2Component', () => {
  let component: AngularServiceC2Component;
  let fixture: ComponentFixture<AngularServiceC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularServiceC2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularServiceC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
