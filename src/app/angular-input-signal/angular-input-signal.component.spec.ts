import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInputSignalComponent } from './angular-input-signal.component';

describe('AngularInputSignalComponent', () => {
  let component: AngularInputSignalComponent;
  let fixture: ComponentFixture<AngularInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularInputSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
