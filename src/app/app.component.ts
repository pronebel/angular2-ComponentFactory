import { Component } from '@angular/core';
import {FIELDS} from './shared/fields/fields'
import {FieldsModule, COMPONENTS} from './shared/fields/fields.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public fields = FIELDS;
  public comp;
  //TODO change to FIELD type or Interface;
  public field:Object = {
    name: 'Main container',
    type: 'text',
  };

  public selectType(type,field) {
    console.log(type);
    console.log(field);
    this.comp = this.filterComponents(type);
  }

  private filterComponents(cmp:any): any {
    return COMPONENTS.find((element: any): any => {
      return element.name === cmp;
    }).ref;
  }
}
