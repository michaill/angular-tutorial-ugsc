import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, merge, timer } from 'rxjs';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {
  a = new FormControl(1);
  b = new FormControl(2);
  c$ = merge(
    timer(0),
    this.a.valueChanges,
    this.b.valueChanges
  ).pipe(
    map(() => this.a.value + this.b.value)
  );
}
