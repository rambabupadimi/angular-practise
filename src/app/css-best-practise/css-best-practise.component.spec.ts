import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBestPractiseComponent } from './css-best-practise.component';

describe('CssBestPractiseComponent', () => {
  let component: CssBestPractiseComponent;
  let fixture: ComponentFixture<CssBestPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBestPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBestPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
