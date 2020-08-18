import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pet} from '../model/pet'

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
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
}
