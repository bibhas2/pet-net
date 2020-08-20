import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
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

  pets:Pet[] = [
    {
      id: "P001",
      name: "Sofie",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48750887/1/",
      animalType: "Dog",
      houseTrained: true,
      age: 3,
      description: "Sofie is an incredibly sweet girl",
      featured: false,
      favorite: true
    },
    {
      id: "P002",
      name: "DJ",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48711200/1/",
      animalType: "Dog",
      houseTrained: false,
      age: 1,
      description: "Hello my name is DJ and I am a a wonderful puppy.",
      featured: true,
      favorite: false
    },
    {
      id: "P003",
      name: "Gaston",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48730669/1/",
      animalType: "Cat",
      houseTrained: true,
      age: 2,
      description: "Gaston is an adorable gray and white fluffy tabby.",
      featured: false,
      favorite: false
    },
    {
      id: "P004",
      name: "Blue",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45350293/2/",
      animalType: "Horse",
      houseTrained: true,
      age: 5,
      description: "Blue is a sweet girl with some hoof issues.",
      featured: false,
      favorite: false
    },

  ]
  constructor() { }

  getAllPets() : Pet[] {
    return this.pets
  }

  getCountryList() {
    return this.countryList
  }
}
