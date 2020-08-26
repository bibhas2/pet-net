import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pet } from '../model/pet'
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {validateDomain} from '../model/domain.validator'
import { PetService } from '../model/pet.service';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css'],
  exportAs: "petDisplay"
})
export class PetDisplayComponent implements OnInit {
  adoptionForm: FormGroup

  showPopup = false

  countryList

  @Input()
  pet: Pet

  @Output("toggle-favorite")
  favoriteEventEmitter = new EventEmitter

  constructor(private petSvc:PetService) { }

  ngOnInit(): void {
    this.countryList = this.petSvc.getCountryList()
    
    this.adoptionForm = new FormGroup({
      clientName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      clientEmail: new FormControl("", [Validators.required, Validators.email, 
        validateDomain(["@ibm.com", "@microsoft.com"])]),
      countryCode: new FormControl("US"),
      messageText: new FormControl(`I will like more information about ${this.pet.name}`)
    })
  }

  getCSSClasses(pet: Pet) {
    return { 'featured-pet': pet.featured }
  }

  getFavoriteIcon(): string {
    return this.pet.favorite ?
      "/assets/heart-red.svg" :
      "/assets/heart-white.svg"
  }

  raiseFavoriteEvent() {
    this.favoriteEventEmitter.emit(this.pet.id)
  }

  handleSubmit() {
    console.log(this.adoptionForm.value)

    //Reset the form
    this.adoptionForm.setValue({
      clientName: "",
      clientEmail: "",
      countryCode: "US",
      messageText: `I will like more information about ${this.pet.name}`
    })

    this.showPopup = false
  }

}
