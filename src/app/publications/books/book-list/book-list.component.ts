import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../common/publication.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService: PublicationService<Book>
  ) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((books) => {
      this.books = books;
    });
  }
}
