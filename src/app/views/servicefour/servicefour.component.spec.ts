import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefourComponent } from './servicefour.component';

describe('ServicefourComponent', () => {
  let component: ServicefourComponent;
  let fixture: ComponentFixture<ServicefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
