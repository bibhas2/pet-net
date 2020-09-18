import { TestBed } from '@angular/core/testing';

import { PetService } from './pet.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';

class FakeAdoptionHttpClient {
  petList:Pet[] = [
    {
      id: "P001",
      name: "Sofie",
      imageURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48750887/1/",
      animalType: "Dog",
      houseTrained: true,
      age: 3,
      description: "Sofie is an incredibly sweet girl",
      featured: false,
      favorite: false
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
    }
  ]

  get(url:string) : Observable<Pet[]> {
    return of(this.petList)
  }
  put(url:string, body:Object) : Observable<Object> {
    let parts = url.split("/")
    const petId = parts[parts.length-2]
    const pet = this.petList.find(p => p.id == petId)

    if (pet != undefined) {
      pet.favorite = body["favorite"]
    }

    return of({})
  }
}


describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient, useClass: FakeAdoptionHttpClient
      }]
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get pets', (done) => {
    service.getAllPets().subscribe(list => {
      expect(list.length).toBe(2)
      expect(list[1].id).toBe("P002")

      done()
    })
  })

  it('Should update favorite', (done) => {
    service.setFavorite("P001", true).subscribe(_ => {
      service.getAllPets().subscribe(list => {
        const pet = list.find(p => p.id == "P001")

        expect(pet).toBeDefined()
        expect(pet.favorite).toBeTrue()
  
        done()
      })  
    })
  })

});
