import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private listService: ListService){}

  animalDetails = '';

  animals : Animal [] =[
    {name: "Dog", type: "Dog", age: 5},
    {name: "Cat", type: "Cat", age: 5},
    {name: "Bob", type: "Horse",age: 5},
    {name: "Fish", type: "Fish",age: 5},
  ];

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}, anos!`;
  }

  removeAnimal(animal: Animal){
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

}
