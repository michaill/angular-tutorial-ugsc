import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicationFormComponent } from '../../common/abstract/form.component';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-cva-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormCVAComponent extends PublicationFormComponent<Book> {
  protected setupForm(item: Book) {
    this.form = new FormGroup({
      publication: this.setPublicationControl(item),
      isbn: new FormControl(item.isbn)
    });
  }
}
