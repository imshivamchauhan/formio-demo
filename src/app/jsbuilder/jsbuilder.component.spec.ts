import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbuilderComponent } from './jsbuilder.component';

describe('JsbuilderComponent', () => {
  let component: JsbuilderComponent;
  let fixture: ComponentFixture<JsbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
