import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCartItemComponent } from './app-cart-item.component';

describe('AppCartItemComponent', () => {
  let component: AppCartItemComponent;
  let fixture: ComponentFixture<AppCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
