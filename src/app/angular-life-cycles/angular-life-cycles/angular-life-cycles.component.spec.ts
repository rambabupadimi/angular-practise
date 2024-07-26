import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCyclesComponent } from './angular-life-cycles.component';

describe('AngularLifeCyclesComponent', () => {
  let component: AngularLifeCyclesComponent;
  let fixture: ComponentFixture<AngularLifeCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLifeCyclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLifeCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
