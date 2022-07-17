import { Component, Input, TemplateRef } from '@angular/core';
import { Publication } from '../publication.interface';

@Component({
  selector: 'app-publications-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Publication[] = [];
  @Input() customDetail: TemplateRef<{ data: Publication }> | undefined;
}
