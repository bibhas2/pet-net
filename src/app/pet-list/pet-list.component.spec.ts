import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { PetDisplayComponent } from '../pet-display/pet-display.component';
import { By } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ 
        PetDisplayComponent, //We must add this
        PetListComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Good example use of the DebugElement API.
   * 
   * Causes a click on the favorite button. Expects the
   * favorite flag to toggle after that.
   */
  it('Should handle custom event', () => {
    //Lookup one of the child PetDisplayComponent
    let pd = fixture.debugElement.query(By.css("app-pet-display"))
    
    //Make sure we did the lookup right by checking the 
    //class name of the child component
    expect(pd.componentInstance.constructor.name).toBe("PetDisplayComponent")

    //Typecast the child component
    let child : PetDisplayComponent = pd.componentInstance as PetDisplayComponent

    //Set the initial value of favorite so we can validate a change later
    child.pet.favorite = true
    //Should do this after a component state change
    //to be safe
    fixture.detectChanges()

    //Lookup the favorite button
    let favButton = pd.query(By.css(".favorite-img"))

    favButton.triggerEventHandler("click", null)

    fixture.detectChanges()

    //favorite should now be false
    expect(child.pet.favorite).toBeFalse()
  })
});
