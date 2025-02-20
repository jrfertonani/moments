import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animalDetails = '';

  animals : Animal [] =[
    {name: "Dog", type: "Dog", age: 5},
    {name: "Cat", type: "Cat", age: 5},
    {name: "Bob", type: "Horse",age: 5},
    {name: "Fish", type: "Fish",age: 5},
  ];

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}, anos!`;
  }

}
