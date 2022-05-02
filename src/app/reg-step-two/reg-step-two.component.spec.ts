import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepTwoComponent } from './reg-step-two.component';

describe('RegStepTwoComponent', () => {
  let component: RegStepTwoComponent;
  let fixture: ComponentFixture<RegStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
