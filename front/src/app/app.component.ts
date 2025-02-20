import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName ='joaquin';


  userData={
    email: 'email@email.com',
    role: 'Admin'
  };

  title = 'front';
}
