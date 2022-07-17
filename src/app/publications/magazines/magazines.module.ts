import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { MagazineFormComponent } from './magazine-form/magazine-form.component';
import { MagazineTranslateComponent } from './magazine-translate/magazine-translate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonPublicationsModule } from '../common/common.module';
import { MagazineFormCVAComponent } from './magazine-form-cva/magazine-form.component';
import { MagazineListGenericComponent } from './magazine-list-generic/magazine-list.component';
import { PublicationService } from '../common/publication.service';
import { API_ENDPOINT_URL } from '../common/publication.tokens';



@NgModule({
  declarations: [
    MagazineListComponent,
    MagazineListGenericComponent,
    MagazineFormComponent,
    MagazineFormCVAComponent,
    MagazineTranslateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonPublicationsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MagazineListComponent
      },
      {
        path: 'list',
        component: MagazineListGenericComponent
      },
      {
        path: 'edit/:id',
        component: MagazineFormComponent
      },
      {
        path: 'edit2/:id',
        component: MagazineFormCVAComponent
      },
      {
        path: 'translate/:id',
        component: MagazineTranslateComponent
      }
    ])
  ],
  providers: [
    PublicationService,
    {
      provide: API_ENDPOINT_URL,
      useValue: 'magazines/'
    },
  ]
})
export class MagazinesModule { }
