import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextComponent} from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextComponent,
    TextareaComponent,
    SelectComponent
  ],
  entryComponents: [
    TextComponent,
    TextareaComponent,
    SelectComponent
  ]
})
export class FieldsModule { }

export const COMPONENTS:any = [
  {
    name: 'TextComponent',
    ref: TextComponent
  },
  {
    name: 'TextareaComponent',
    ref: TextareaComponent
  },
  {
    name: 'SelectComponent',
    ref: SelectComponent
  }
];
