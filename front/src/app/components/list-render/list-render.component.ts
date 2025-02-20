import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals =[
    {name: "Dog", type: "Dog"},
    {name: "Cat", type: "Cat"},
    {name: "Bob", type: "Horse"},
    {name: "Fish", type: "Fish"},
  ];

}
