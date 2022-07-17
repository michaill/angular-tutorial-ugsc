import { Directive, OnInit } from '@angular/core';
import { Publication } from '../../common/publication.interface';
import { PublicationService } from '../../common/publication.service';

@Directive({ selector: 'abstract-publications-list' })
export abstract class PublicationListComponent<T extends Publication> implements OnInit {
  items: T[] = [];

  constructor(
    private publicationService: PublicationService<T>
  ) {}

  ngOnInit(): void {
    this.publicationService.getAll().subscribe((items) => {
      this.items = items;
    });
  }
}
