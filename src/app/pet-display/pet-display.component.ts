import { Component, OnInit, Input } from '@angular/core';
import {Pet} from '../model/pet'

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
  @Input()
  pet: Pet

  constructor() { }

  ngOnInit(): void {
  }

}
