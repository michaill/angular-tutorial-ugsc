import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Publication } from '../publication.interface';

@Component({
  selector: 'app-publication-data',
  templateUrl: './publication-data.component.html',
  styleUrls: ['./publication-data.component.scss'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => PublicationDataComponent),
      multi: true     
    }   
  ]
})
export class PublicationDataComponent implements ControlValueAccessor, OnDestroy, OnInit {

  onChanged: any = () => {}
  onTouched: any = () => {}
  form = new FormGroup({
    name: new FormControl(),
    author: new FormControl(),
    year: new FormControl(),
    description: new FormControl()
  });

  private sub: Subscription | undefined;

  ngOnInit(): void {
    this.sub = this.form.valueChanges.subscribe((value) => {
      this.onTouched();
      this.onChanged(value);
    });
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  writeValue(val: Publication) {
    console.log("write value", val);
    this.form.controls['name'].setValue(val.name, { emitEvent: false });
    this.form.controls['author'].setValue(val.author, { emitEvent: false });
    this.form.controls['year'].setValue(val.year, { emitEvent: false });
    this.form.controls['description'].setValue(val.description, { emitEvent: false });
  }

  registerOnChange(fn: any){
    this.onChanged = fn
  }
  registerOnTouched(fn: any){
    this.onTouched = fn
  }
}
