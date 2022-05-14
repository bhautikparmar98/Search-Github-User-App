import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"", component:SearchComponent},
  {path:"seacrh", component:SearchComponent},
  {path:"history", component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
