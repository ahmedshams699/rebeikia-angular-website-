import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesexComponent } from './servicesex.component';

describe('ServicesexComponent', () => {
  let component: ServicesexComponent;
  let fixture: ComponentFixture<ServicesexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
