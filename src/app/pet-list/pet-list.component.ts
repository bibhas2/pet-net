import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import {PetService} from '../model/pet.service'

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  viewMode = 'list'

  pets:Pet[] = []

  constructor(private petSvc:PetService) { }

  ngOnInit(): void {
    this.petSvc.getAllPets().subscribe(
      list => this.pets = list,
      err => alert('Sorry there was a problem'))
  }

  toggleFavorite(petId:string) {
    let pet = this.pets.find(p => p.id === petId)

    if (pet != undefined) {
      const favorite = !pet.favorite

      this.petSvc.setFavorite(petId, favorite).subscribe(response => {
        pet.favorite = favorite
      },
      err => alert('Sorry there was a problem'))
    }
  }

}
