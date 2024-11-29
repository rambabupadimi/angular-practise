import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableComponent } from './deferable.component';

describe('DeferableComponent', () => {
  let component: DeferableComponent;
  let fixture: ComponentFixture<DeferableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
