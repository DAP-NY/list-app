import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'list/:listName', component: ListsContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
