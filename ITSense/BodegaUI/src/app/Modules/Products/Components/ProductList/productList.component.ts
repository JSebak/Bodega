import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, Input } from "@angular/core";
import { SearchService } from "src/app/Modules/Shared/Services/search.service";
import { Product } from "../../Models/Product";
import { ProductsService } from "../../Services/products.service";


@Component({
  selector: 'ProductList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductsListComponent {
spinner: boolean = false;
search: string='';
filter: string='';
productList: Product[];
filteredList: Product[];

constructor(private productService: ProductsService, private searchService: SearchService) {
  this.searchService.search.subscribe(value => {
    this.search = value;
    this.loadProducts();
  });
  this.searchService.filter.subscribe(value => {
    this.filter = value;
    this.loadProducts();
  })
}

ngOnInit(): void {
  this.loadProducts();
}

loadProducts(){
  this.spinner = true;
  this.productService.getProducts().subscribe(result =>{
    let temp = result;
    this.productList= temp;
    this.filteredList= temp;
    if(this.search != null && this.search.length > 0 ){
      this.filteredList = this.filteredList.filter(p=>p.name.toLowerCase().includes(this.search));
    }
    if(this.filter != null && this.filter.length>0){
      switch (this.filter) {
        case "Defectuosos":
          this.filteredList = this.filteredList.filter(p=>p.status == true);
          break;
        case "Optimos":
          this.filteredList = this.filteredList.filter(p=>p.status == false);
          break;
        default:
          break;
      }
    }
    this.spinner = false;
  });
}

}
