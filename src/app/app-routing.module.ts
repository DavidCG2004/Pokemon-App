import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: '', redirectTo: 'pokemon-search', pathMatch: 'full' },
  { 
    path: 'pokemon-search', 
    loadChildren: () => import('./pages/pokemon-search/pokemon-search.module').then(m => m.PokemonSearchPageModule) 
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}