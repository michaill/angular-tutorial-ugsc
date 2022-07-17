import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER, Observable, of, switchMap, tap } from 'rxjs';
import { Magazine, Periodicity } from '../magazine.interface';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-magazine-form',
  templateUrl: './magazine-form.component.html',
  styleUrls: ['./magazine-form.component.scss']
})
export class MagazineFormComponent implements OnInit {
  item$: Observable<Magazine> | undefined;
  form: FormGroup | null = null;
  id: number | null = null;
  error: any = null;
  periodicity = Object.values(Periodicity);

  get isNew(): boolean {
    return this.id === null;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private magazineService: MagazineService
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.params.pipe(
      tap(() => this.form = null),
      switchMap((params) => {
        if (params['id'] != "new") {
          this.id = params['id'];
          return this.magazineService.getById(params['id']);
        }
        this.id = null;
        return of({ year: new Date().getFullYear() } as Magazine);
      }),
      tap((item) => this.setupForm(item))
    );
  }
  
  save() {
    if (this.form && this.form.valid) {
      (this.isNew
        ? this.magazineService.create(this.form.value)
        : this.magazineService.edit({
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
          this.router.navigate(['/magazines']);
        }
      );
    }
  }

  private setupForm(item: Magazine) {
    this.form = new FormGroup({
      name: new FormControl(item.name),
      author: new FormControl(item.author),
      year: new FormControl(item.year),
      periodicity: new FormControl(item.periodicity)
    });
  }
}
