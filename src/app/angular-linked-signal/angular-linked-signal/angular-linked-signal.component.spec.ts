import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLinkedSignalComponent } from './angular-linked-signal.component';

describe('AngularLinkedSignalComponent', () => {
  let component: AngularLinkedSignalComponent;
  let fixture: ComponentFixture<AngularLinkedSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLinkedSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLinkedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
