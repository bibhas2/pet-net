import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets:Pet[] = [
    {
      id: "P001",
      name: "Sofie",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48750887/1/",
      animalType: "Dog",
      houseTrained: true,
      age: 3,
      description: "Sofie is an incredibly sweet girl",
      featured: false
    },
    {
      id: "P002",
      name: "DJ",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48711200/1/",
      animalType: "Dog",
      houseTrained: false,
      age: 1,
      description: "Hello my name is DJ and I am a a wonderful puppy.",
      featured: true
    },
    {
      id: "P003",
      name: "Gaston",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48730669/1/",
      animalType: "Cat",
      houseTrained: true,
      age: 2,
      description: "Gaston is an adorable gray and white fluffy tabby.",
      featured: false
    },
    {
      id: "P004",
      name: "Blue",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45350293/2/",
      animalType: "Horse",
      houseTrained: true,
      age: 5,
      description: "Blue is a sweet girl with some hoof issues.",
      featured: false
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
