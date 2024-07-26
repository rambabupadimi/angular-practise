import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularWebComponentComponent } from './angular-web-component.component';

describe('AngularWebComponentComponent', () => {
  let component: AngularWebComponentComponent;
  let fixture: ComponentFixture<AngularWebComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularWebComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
