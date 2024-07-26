import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularRxJsComponent } from './angular-rx-js.component';

describe('AngularRxJsComponent', () => {
  let component: AngularRxJsComponent;
  let fixture: ComponentFixture<AngularRxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRxJsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
