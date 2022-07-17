import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_ENDPOINT_URL } from '../common/publication.tokens';
import { PublicationService } from '../common/publication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonPublicationsModule } from '../common/common.module';
import { BoardGamesListComponent } from './board-games-list/board-games-list.component';
import { BoardGameFormComponent } from './board-game-form/board-game-form.component';
import { BoardGameTranslateComponent } from './board-game-translate/board-game-translate.component';

@NgModule({
  declarations: [
    BoardGamesListComponent,
    BoardGameFormComponent,
    BoardGameTranslateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonPublicationsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'exact',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: BoardGamesListComponent
      },
      {
        path: 'edit',
        redirectTo: 'edit2'
      },
      {
        path: 'edit2/:id',
        component: BoardGameFormComponent
      },
      {
        path: 'translate/:id',
        component: BoardGameTranslateComponent
      }
    ])
  ],
  providers: [
    PublicationService,
    {
      provide: API_ENDPOINT_URL,
      useValue: 'boardGames/'
    },
  ]
})
export class BoardGamesModule { }
