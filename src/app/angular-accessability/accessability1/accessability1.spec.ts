import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessability1 } from './accessability1';

describe('Accessability1', () => {
  let component: Accessability1;
  let fixture: ComponentFixture<Accessability1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessability1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessability1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
