import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReusable } from './card-reusable';

describe('CardReusable', () => {
  let component: CardReusable;
  let fixture: ComponentFixture<CardReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
