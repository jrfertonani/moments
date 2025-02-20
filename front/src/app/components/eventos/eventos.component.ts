import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {

  show: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showMsg(): void{
    this.show = !this.show;
  }
}
