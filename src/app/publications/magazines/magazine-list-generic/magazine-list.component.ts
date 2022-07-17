import { Component } from '@angular/core';
import { PublicationListComponent } from '../../common/abstract/list.component';
import { Magazine } from '../magazine.interface';

@Component({
  selector: 'app-magazine-generic-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.scss']
})
export class MagazineListGenericComponent extends PublicationListComponent<Magazine> {}
