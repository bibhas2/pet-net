import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDisplayComponent } from './pet-display.component';

describe('PetDisplayComponent', () => {
  let component: PetDisplayComponent;
  let fixture: ComponentFixture<PetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
