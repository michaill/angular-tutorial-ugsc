import { Component } from '@angular/core';
import { PublicationListComponent } from '../../common/abstract/list.component';
import { BoardGame } from '../board-game.interface';

@Component({
  selector: 'app-board-games-list',
  templateUrl: './board-games-list.component.html'
})
export class BoardGamesListComponent extends PublicationListComponent<BoardGame> {}
