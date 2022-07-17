import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [{
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'basic-form',
    component: BasicFormComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./publications/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'magazines',
    loadChildren: () => import('./publications/magazines/magazines.module').then(m => m.MagazinesModule)
  },
  {
    path: 'board-games',
    loadChildren: () => import('./publications/boardGames/board-games.module').then(m => m.BoardGamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
