import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrendererComponent } from './ngrenderer.component';

describe('NgrendererComponent', () => {
  let component: NgrendererComponent;
  let fixture: ComponentFixture<NgrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
