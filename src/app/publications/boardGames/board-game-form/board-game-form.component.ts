import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicationFormComponent } from '../../common/abstract/form.component';
import { BoardGame } from '../board-game.interface';

@Component({
  selector: 'app-board-game-form',
  templateUrl: './board-game-form.component.html'
})
export class BoardGameFormComponent extends PublicationFormComponent<BoardGame> {
  protected setupForm(item: BoardGame) {
    this.form = new FormGroup({
      publication: this.setPublicationControl(item),
      minPlayers: new FormControl(item.minPlayers),
      maxPlayers: new FormControl(item.maxPlayers)
    });
  }
}
