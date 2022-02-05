import {Component, Input} from '@angular/core';
import { Guid } from 'guid-typescript';
import { Product } from 'src/app/Modules/Products/Models/Product';
import { ProductsService } from 'src/app/Modules/Products/Services/products.service';


@Component({
  selector: 'cardComponent',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public product: Product ;
  // product: Product = new Product();
  mock: Product = new Product();

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  /**
   *
   */
  constructor(private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.mock= this.product;
    //this.loadMock();
  }

  loadMock(){
    this.mock = {
      id:Guid.create(),
      name:'Car',
      state:1,
      defective:false
    };
  }
  loadProduct(id: Guid){
    this.productService.getProduct(id).subscribe(result =>{
      let temp = result;
      this.product= temp;
    });
  }


}
