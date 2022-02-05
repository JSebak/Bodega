import { Component, Input } from "@angular/core";
import { Product } from "../../Models/Product";

@Component({
  selector: 'ProductComponent',
  templateUrl: './product.component.html',
  // styleUrls: ['./products.component.css']
})
export class ProductComponent {
  @Input() public product: Product;

  ngOnInit():void{
    this.product;
  }


}
