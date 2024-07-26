import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularViewEncapsulationComponent } from './angular-view-encapsulation.component';

describe('AngularViewEncapsulationComponent', () => {
  let component: AngularViewEncapsulationComponent;
  let fixture: ComponentFixture<AngularViewEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularViewEncapsulationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
