import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefiveComponent } from './servicefive.component';

describe('ServicefiveComponent', () => {
  let component: ServicefiveComponent;
  let fixture: ComponentFixture<ServicefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
