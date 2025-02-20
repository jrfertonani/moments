import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';

Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
})

export const routes: Routes = [

    { path: '', component: ListRenderComponent }
  ];
