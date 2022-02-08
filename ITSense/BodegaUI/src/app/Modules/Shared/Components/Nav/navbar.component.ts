import { Component, EventEmitter, Output } from "@angular/core";
import { SearchService } from "../../Services/search.service";


@Component({
  selector: 'navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class navbar {
  search: string = '';

  constructor(private searchService: SearchService) {}

  onKey(search: any){
    this.search = search.target.value;
    this.searchService.search.next(this.search.toLowerCase());
  }
}
