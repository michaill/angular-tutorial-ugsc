import { Component, OnInit } from '@angular/core';
import { Magazine } from '../magazine.interface';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.scss']
})
export class MagazineListComponent implements OnInit {

  magazines: Magazine[] = [];

  constructor(
    private magazineService: MagazineService
  ) {}

  ngOnInit(): void {
    this.magazineService.getAll().subscribe((magazines) => {
      this.magazines = magazines;
    });
  }
}
