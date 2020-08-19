import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pet} from '../model/pet'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
  defaultCountry = "US"

  countryList = [
    {
      name: "USA",
      code: "US"
    },
    {
      name: "Canada",
      code: "CA"
    },
    {
      name: "Mexico",
      code: "MX"
    },
  ]

  @Input()
  pet: Pet
  @Output("toggle-favorite")
  favoriteEventEmitter = new EventEmitter
  showPopup = false

  constructor() { }

  ngOnInit(): void {
  }
  getFavoriteIcon() : string {
    return this.pet.favorite ?
      "/assets/heart-red.svg" :
      "/assets/heart-white.svg"
  }
  raiseFavoriteEvent() {
    this.favoriteEventEmitter.emit(this.pet.id)
  }

  handleSubmit(form:NgForm) {
    console.log(form.value)

    //Close popup
    this.showPopup = false
  }

  getDefaultMessage() {
    return `I will like more information about ${this.pet.name}.`
  }
}
