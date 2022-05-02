import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepOneComponent } from './reg-step-one.component';

describe('RegStepOneComponent', () => {
  let component: RegStepOneComponent;
  let fixture: ComponentFixture<RegStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
