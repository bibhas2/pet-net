import { TestBed } from '@angular/core/testing';

import { PetService } from './pet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PetService', () => {
  let service: PetService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PetService);
    httpTestingController = TestBed.inject(HttpTestingController)
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

    const req = httpTestingController.expectOne("http://localhost:3000/pet")

    req.flush([
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
    ])
  })

  it('Should update favorite', (done) => {
    const petId = "P001"

    service.setFavorite(petId, true).subscribe(_ => {
      service.getAllPets().subscribe(list => {
        const pet = list.find(p => p.id == petId)

        expect(pet).toBeDefined()
        expect(pet.favorite).toBeTrue()
  
        done()
      })  

      const calls = httpTestingController.match(req => {
        return req.url == "http://localhost:3000/pet" && req.method == "GET"
      })
      calls[0].flush([
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
        }
      ])
    })

    const calls = httpTestingController.match(req => {
      return req.url == `http://localhost:3000/pet/${petId}/favorite` &&
        req.method == "PUT"
    })

    calls[0].flush({})
  })

});
