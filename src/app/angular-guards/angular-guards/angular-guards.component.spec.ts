import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularGuardsComponent } from './angular-guards.component';

describe('AngularGuardsComponent', () => {
  let component: AngularGuardsComponent;
  let fixture: ComponentFixture<AngularGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGuardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
