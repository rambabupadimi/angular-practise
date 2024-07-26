import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularViewEncapsulationParentComponent } from './angular-view-encapsulation-parent.component';

describe('AngularViewEncapsulationParentComponent', () => {
  let component: AngularViewEncapsulationParentComponent;
  let fixture: ComponentFixture<AngularViewEncapsulationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularViewEncapsulationParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularViewEncapsulationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
