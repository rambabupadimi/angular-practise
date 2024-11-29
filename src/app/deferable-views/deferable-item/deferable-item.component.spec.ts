import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableItemComponent } from './deferable-item.component';

describe('DeferableItemComponent', () => {
  let component: DeferableItemComponent;
  let fixture: ComponentFixture<DeferableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
