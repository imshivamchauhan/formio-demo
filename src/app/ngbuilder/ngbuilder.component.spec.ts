import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbuilderComponent } from './ngbuilder.component';

describe('NgbuilderComponent', () => {
  let component: NgbuilderComponent;
  let fixture: ComponentFixture<NgbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
