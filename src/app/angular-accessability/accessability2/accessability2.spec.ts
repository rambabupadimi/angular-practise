import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessability2 } from './accessability2';

describe('Accessability2', () => {
  let component: Accessability2;
  let fixture: ComponentFixture<Accessability2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessability2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessability2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
