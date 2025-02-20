import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {

  name: string = 'first';

  constructor() { }

  ngOnInit(): void {
  }

}
