import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsrendererComponent } from './jsrenderer.component';

describe('JsrendererComponent', () => {
  let component: JsrendererComponent;
  let fixture: ComponentFixture<JsrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
