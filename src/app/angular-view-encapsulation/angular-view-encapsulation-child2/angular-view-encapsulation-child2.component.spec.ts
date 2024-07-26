import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularViewEncapsulationChild2Component } from './angular-view-encapsulation-child2.component';

describe('AngularViewEncapsulationChild2Component', () => {
  let component: AngularViewEncapsulationChild2Component;
  let fixture: ComponentFixture<AngularViewEncapsulationChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularViewEncapsulationChild2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularViewEncapsulationChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
