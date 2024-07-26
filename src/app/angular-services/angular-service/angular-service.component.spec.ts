import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularServiceComponent } from './angular-service.component';

describe('AngularServiceComponent', () => {
  let component: AngularServiceComponent;
  let fixture: ComponentFixture<AngularServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
