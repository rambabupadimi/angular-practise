import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessability } from './accessability';

describe('Accessability', () => {
  let component: Accessability;
  let fixture: ComponentFixture<Accessability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
