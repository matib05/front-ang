import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchildComponent } from './addchild.component';

describe('AddchildComponent', () => {
  let component: AddchildComponent;
  let fixture: ComponentFixture<AddchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
