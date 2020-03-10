import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetwoComponent } from './servicetwo.component';

describe('ServicetwoComponent', () => {
  let component: ServicetwoComponent;
  let fixture: ComponentFixture<ServicetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
