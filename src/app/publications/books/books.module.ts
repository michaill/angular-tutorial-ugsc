import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_ENDPOINT_URL } from '../common/publication.tokens';
import { PublicationService } from '../common/publication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookTranslateComponent } from './book-translate/book-translate.component';
import { CommonPublicationsModule } from '../common/common.module';
import { BookFormCVAComponent } from './book-form-cva/book-form.component';
import { BookListGenericComponent } from './book-list-generic/book-list.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookListGenericComponent,
    BookFormComponent,
    BookFormCVAComponent,
    BookTranslateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonPublicationsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'list',
        component: BookListGenericComponent
      },
      {
        path: 'edit/:id',
        component: BookFormComponent
      },
      {
        path: 'edit2/:id',
        component: BookFormCVAComponent
      },
      {
        path: 'translate/:id',
        component: BookTranslateComponent
      }
    ])
  ],
  providers: [
    PublicationService,
    {
      provide: API_ENDPOINT_URL,
      useValue: 'books/'
    },
  ]
})
export class BooksModule { }
