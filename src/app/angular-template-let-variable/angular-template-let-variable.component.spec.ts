import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateLetVariableComponent } from './angular-template-let-variable.component';

describe('AngularTemplateLetVariableComponent', () => {
  let component: AngularTemplateLetVariableComponent;
  let fixture: ComponentFixture<AngularTemplateLetVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTemplateLetVariableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTemplateLetVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
