import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http:HttpClient) { }

  getCountryList() {
    return this.countryList
  }
  
  getAllPets() : Observable<Pet[]> {
    return this.http.get<Pet[]>("http://localhost:3000/pet")
  }

  setFavorite(petId:string, isFavorite:boolean) : Observable<Object> {
    const url = `http://localhost:3000/pet/${petId}/favorite`

    return this.http.put(url, {favorite: isFavorite})
  }
}
