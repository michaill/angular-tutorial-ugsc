import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicationDataComponent } from './publication-data/publication-data.component';
import { AppCommonModule } from 'src/app/common/common.module';



@NgModule({
  declarations: [
    ListComponent,
    PublicationDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    PublicationDataComponent
  ]
})
export class CommonPublicationsModule { }
