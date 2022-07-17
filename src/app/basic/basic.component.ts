import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  a = 1;
  b = 2;

  changeVars() {
    this.a += 2;
    this.b += 2;
  }
}
