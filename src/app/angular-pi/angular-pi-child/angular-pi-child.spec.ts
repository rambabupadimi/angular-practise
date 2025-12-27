import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPiChild } from './angular-pi-child';

describe('AngularPiChild', () => {
  let component: AngularPiChild;
  let fixture: ComponentFixture<AngularPiChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPiChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPiChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
