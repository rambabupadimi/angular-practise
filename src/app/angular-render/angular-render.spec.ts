import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRender } from './angular-render';

describe('AngularRender', () => {
  let component: AngularRender;
  let fixture: ComponentFixture<AngularRender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
