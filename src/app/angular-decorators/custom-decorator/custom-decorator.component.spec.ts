import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDecoratorComponent } from './custom-decorator.component';

describe('CustomDecoratorComponent', () => {
  let component: CustomDecoratorComponent;
  let fixture: ComponentFixture<CustomDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
