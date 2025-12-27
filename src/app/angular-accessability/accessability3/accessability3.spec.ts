import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessability3 } from './accessability3';

describe('Accessability3', () => {
  let component: Accessability3;
  let fixture: ComponentFixture<Accessability3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessability3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessability3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
