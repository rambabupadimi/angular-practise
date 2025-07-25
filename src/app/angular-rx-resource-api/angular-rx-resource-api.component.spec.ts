import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRxResourceApiComponent } from './angular-rx-resource-api.component';

describe('AngularRxResourceApiComponent', () => {
  let component: AngularRxResourceApiComponent;
  let fixture: ComponentFixture<AngularRxResourceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRxResourceApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRxResourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
