import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularControlFlowsComponent } from './angular-control-flows.component';

describe('AngularControlFlowsComponent', () => {
  let component: AngularControlFlowsComponent;
  let fixture: ComponentFixture<AngularControlFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularControlFlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularControlFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
