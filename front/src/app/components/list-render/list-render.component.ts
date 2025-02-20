import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {

  constructor(private listService: ListService){
    this.getAnimals();
  }
  ngOnInit(): void {
  }

  animalDetails = '';

  animals: Animal [] =[];

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}, anos!`;
  }

  removeAnimal(animal: Animal){
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
