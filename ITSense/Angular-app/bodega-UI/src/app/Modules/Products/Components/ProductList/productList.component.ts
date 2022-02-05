import { Component } from "@angular/core";
import { Guid } from "guid-typescript";
import { Product } from "../../Models/Product";
import { ProductsService } from "../../Services/products.service";


@Component({
  selector: 'ProductList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductsListComponent {
productList: Product[];

constructor(private productService: ProductsService) {
}

ngOnInit(): void {
  this.loadProducts();
}

loadProducts(){
  this.productService.getProducts(0).subscribe(result =>{
    let temp = result;
    this.productList= temp;
  });
}

}
