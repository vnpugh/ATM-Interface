import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDollarsComponent } from './deposit-dollars.component';

describe('DepositDollarsComponent', () => {
  let component: DepositDollarsComponent;
  let fixture: ComponentFixture<DepositDollarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositDollarsComponent]
    });
    fixture = TestBed.createComponent(DepositDollarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
