import { Guid } from "guid-typescript";
import { EMPTY } from "rxjs";

export class Product{
  id: Guid;
  name: string;
  status:boolean;


constructor() {
  this.id= Guid.createEmpty();
  this.name='';
  this.status=false;
}
}
