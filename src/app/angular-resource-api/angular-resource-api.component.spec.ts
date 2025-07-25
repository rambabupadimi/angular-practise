import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResourceApiComponent } from './angular-resource-api.component';

describe('AngularResourceApiComponent', () => {
  let component: AngularResourceApiComponent;
  let fixture: ComponentFixture<AngularResourceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularResourceApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularResourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
