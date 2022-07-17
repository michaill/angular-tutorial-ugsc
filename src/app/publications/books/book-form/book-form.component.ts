import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER, Observable, of, switchMap, tap } from 'rxjs';
import { PublicationService } from '../../common/publication.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  item$: Observable<Book> | undefined;
  form: FormGroup | null = null;
  id: number | null = null;
  error: any = null;

  get isNew(): boolean {
    return this.id === null;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: PublicationService<Book>
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.params.pipe(
      tap(() => this.form = null),
      switchMap((params) => {
        if (params['id'] != "new") {
          this.id = params['id'];
          return this.bookService.getById(params['id']);
        }
        this.id = null;
        return of({ year: new Date().getFullYear() } as Book);
      }),
      tap((item) => this.setupForm(item))
    );
  }
  
  save() {
    if (this.form && this.form.valid) {
      (this.isNew
        ? this.bookService.create(this.form.value)
        : this.bookService.edit({
          id: this.id,
          ...this.form.value
        })
      ).pipe(
        catchError((error) => {
          this.error = error;
          return NEVER;
        })
      ).subscribe(
        () => {
          this.error = null;
          this.router.navigate(['/books']);
        }
      );
    }
  }

  private setupForm(item: Book) {
    this.form = new FormGroup({
      name: new FormControl(item.name),
      author: new FormControl(item.author),
      year: new FormControl(item.year),
      isbn: new FormControl(item.isbn)
    });
  }
}
