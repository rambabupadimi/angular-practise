import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularViewEncapsulationChild1Component } from './angular-view-encapsulation-child1.component';

describe('AngularViewEncapsulationChild1Component', () => {
  let component: AngularViewEncapsulationChild1Component;
  let fixture: ComponentFixture<AngularViewEncapsulationChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularViewEncapsulationChild1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularViewEncapsulationChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
