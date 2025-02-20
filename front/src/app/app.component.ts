import { Component } from '@angular/core';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent, ListRenderComponent],
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
