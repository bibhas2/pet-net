import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDisplayComponent } from './pet-display.component';
import { Pet } from '../model/pet';
import { By } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

describe('PetDisplayComponent', () => {
  let component: PetDisplayComponent;
  let fixture: ComponentFixture<PetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDisplayComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDisplayComponent);
    component = fixture.componentInstance;

    //Must supply @Input values here
    let pet = new Pet

    pet.id = "100"
    pet.animalType = "Dog"
    pet.name = "Scooby"

    component.pet = pet

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize form', () => {
    expect(component.adoptionForm.controls.messageText.value)
      .toBe(`I will like more information about Scooby`)
  });

  it('Form should be valid', () => {
    component.adoptionForm.patchValue({
      clientName: "Bibhas",
      clientEmail: "bibhas2@gmail.com"
    })

    expect(component.adoptionForm.valid).toBeTrue()
  });

  it('Form should be invalid', () => {
    component.adoptionForm.patchValue({
      clientName: "Bibhas",
      clientEmail: "bibhas2@ibm.com"
    })

    expect(component.adoptionForm.valid).toBeFalse()
  });

  it("Should submit form", () => {
    component.adoptionForm.patchValue({
      clientName: "Bibhas",
      clientEmail: "bibhas2@gmail.com"
    })

    //Open the popup form
    component.showPopup = true
    //Need to call this after altering component's state
    fixture.detectChanges();

    //Lookup the form
    let form = fixture.debugElement.query(By.css("form"))
    //Trigger submit event
    form.triggerEventHandler("submit", {})
    
    fixture.detectChanges();

    //Form should be reset now.
    expect(component.adoptionForm.controls.clientName.value)
      .toBe("")

    //Popup should be closed now
    expect(component.showPopup).toBeFalse()
  })
});
