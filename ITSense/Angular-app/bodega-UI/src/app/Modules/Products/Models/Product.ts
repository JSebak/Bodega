import { Guid } from "guid-typescript";
import { EMPTY } from "rxjs";

export class Product{
  id: Guid;
  name: string;
  state:number;
  defective:boolean;


constructor() {
  this.id= Guid.createEmpty();
  this.name='';
  this.state=0;
  this.defective=false;

}
}
