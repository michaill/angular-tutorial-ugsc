import { Component } from '@angular/core';
import { PublicationListComponent } from '../../common/abstract/list.component';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-generic-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListGenericComponent extends PublicationListComponent<Book> {}
