import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaAutosizeDirective } from './textarea-autosize.directive';

@NgModule({
  declarations: [
    TextareaAutosizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextareaAutosizeDirective
  ]
})
export class AppCommonModule { }
