import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent {

  @Input() data: {label: string, type: string};
  @Input() parentLabel: string;

  printLabel (){
    console.log(this.data.label + (this.parentLabel ? ' -> ' + this.parentLabel : ''));
  }

}
