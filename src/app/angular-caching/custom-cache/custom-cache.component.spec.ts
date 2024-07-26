import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCacheComponent } from './custom-cache.component';

describe('CustomCacheComponent', () => {
  let component: CustomCacheComponent;
  let fixture: ComponentFixture<CustomCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
