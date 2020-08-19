import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pet} from '../model/pet'
import { NgForm } from '@angular/forms';

class AdoptionRequest {
  clientName:string
  clientEmail:string
  countryCode:string
  messageText:string
}

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
  adoptionRequest:AdoptionRequest

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
    this.adoptionRequest = new AdoptionRequest
    this.adoptionRequest.countryCode = "US"
    this.adoptionRequest.messageText = `I will like more information about ${this.pet.name}.`
  }

  getFavoriteIcon() : string {
    return this.pet.favorite ?
      "/assets/heart-red.svg" :
      "/assets/heart-white.svg"
  }
  raiseFavoriteEvent() {
    this.favoriteEventEmitter.emit(this.pet.id)
  }

  handleSubmit() {
    console.log(this.adoptionRequest)

    this.showPopup = false
  }
}
