import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainarComponent } from './containar.component';

describe('ContainarComponent', () => {
  let component: ContainarComponent;
  let fixture: ComponentFixture<ContainarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainarComponent]
    });
    fixture = TestBed.createComponent(ContainarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
