import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { PetDisplayComponent } from '../pet-display/pet-display.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
   * Checks the DOM upon initialization
   */
  it('Should have correct DOM', async(() => {
    //Pet data is loaded asynchronously.
    //We need to wait for stabilization
    fixture.whenStable().then(() => {
      //This is crucially necessary for the DOM
      //to be fully updated after data is received.
      fixture.detectChanges();

      //Look up all the child PetDisplayComponent
      const debugComponents = fixture.debugElement.queryAll(By.css("app-pet-display"))

      //There are 4 pets in backend
      expect(debugComponents.length).toBe(4)

      //At least one component should have a pet with ID "P001"
      const pd = debugComponents.find(dc => dc.componentInstance.pet.id == "P001")
      expect(pd).toBeDefined()
    })
  }))
});
