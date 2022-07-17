import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicationFormComponent } from '../../common/abstract/form.component';
import { Magazine, Periodicity } from '../magazine.interface';

@Component({
  selector: 'app-magazine-cva-form',
  templateUrl: './magazine-form.component.html',
  styleUrls: ['./magazine-form.component.scss']
})
export class MagazineFormCVAComponent extends PublicationFormComponent<Magazine> {
  periodicity = Object.values(Periodicity);

  protected setupForm(item: Magazine) {
    this.form = new FormGroup({
      publication: this.setPublicationControl(item),
      periodicity: new FormControl(item.periodicity)
    });
  }
}
