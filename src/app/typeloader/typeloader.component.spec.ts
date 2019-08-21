import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeloaderComponent } from './typeloader.component';

describe('TypeloaderComponent', () => {
  let component: TypeloaderComponent;
  let fixture: ComponentFixture<TypeloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
