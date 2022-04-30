import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

export interface DemoColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent  {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;



  fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
