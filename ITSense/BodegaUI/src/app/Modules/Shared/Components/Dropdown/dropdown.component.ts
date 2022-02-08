import { Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";

@Component({
  selector: 'DropdownComponent',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})

export class DropdownComponent{
@Input() public options: string[];
@Output() selected: EventEmitter<string> = new EventEmitter;

/**
 *
 */
constructor() {
this.options;
}
Select(option: string){
  this.selected.emit(option);
}
}
