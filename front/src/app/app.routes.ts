import {  Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [

    { path: '', component: ListRenderComponent },
    { path: 'list/:id', component: ItemDetailComponent}

  ];
