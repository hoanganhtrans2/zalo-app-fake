import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N10t04n2020Component } from './n10t04n2020.component';

describe('N10t04n2020Component', () => {
  let component: N10t04n2020Component;
  let fixture: ComponentFixture<N10t04n2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N10t04n2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N10t04n2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
