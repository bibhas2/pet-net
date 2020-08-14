import { Component, OnInit } from '@angular/core';
import {Pet} from '../model/pet'

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
  pet: Pet = {
    id: "P001",
    name: "Sofie",
    imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48750887/1/",
    animalType: "Dog",
    houseTrained: true,
    age: 3,
    description: "Sofie is an incredibly sweet girl",
    featured: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
