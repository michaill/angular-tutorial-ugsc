import { Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER, Observable, of, switchMap, tap } from 'rxjs';
import { NotificationType } from '../../../notifications/notification.interface';
import { NotificationService } from '../../../notifications/notification.service';
import { Publication } from '../../common/publication.interface';
import { PublicationService } from '../../common/publication.service';

@Directive({ selector: 'abstract-publication-form' })
export abstract class PublicationFormComponent<T extends Publication> implements OnInit {
  item$: Observable<T> | undefined;
  form: FormGroup | null = null;
  id: number | null = null;
  error: any = null;

  get isNew(): boolean {
    return this.id === null;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private publicationService: PublicationService<T>,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.params.pipe(
      tap(() => this.form = null),
      switchMap((params) => {
        if (params['id'] != "new") {
          this.id = params['id'];
          return this.publicationService.getById(params['id']);
        }
        this.id = null;
        return of({ year: new Date().getFullYear() } as T);
      }),
      tap((item) => this.setupForm(item))
    );
  }
  
  save() {
    if (this.form && this.form.valid) {
      const { publication, ...rest} = this.form.value;
      const value = {
        ...publication,
        ...rest
      };
      (this.isNew
        ? this.publicationService.create(value)
        : this.publicationService.edit({
          id: this.id,
          ...value
        })
      ).pipe(
        catchError((error) => {
          this.error = error;
          this.notificationService.showNotification(NotificationType.ERROR, 'Error while saving!');
          return NEVER;
        })
      ).subscribe(
        () => {
          this.error = null;
          this.notificationService.showNotification(NotificationType.INFO, 'Successfully '+(this.isNew ? 'created' : 'updated'));
          this.router.navigate(['../../list'], { relativeTo: this.route });
        }
      );
    }
  }

  protected setPublicationControl(data: Publication) {
    return new FormControl({
      name: data.name,
      author: data.author,
      year: data.year,
      description: data.description
    });
  }

  protected abstract setupForm(item: T): void;
}
