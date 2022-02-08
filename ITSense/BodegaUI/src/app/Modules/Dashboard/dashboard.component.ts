import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../Products/Models/Product";
import { ProductsService } from "../Products/Services/products.service";
import { SearchService } from "../Shared/Services/search.service";


// TODO: Check create product
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboard {
  @ViewChild('newModal',{static: true}) public newProductModal;
  productForm: FormGroup;
  newProduct: Product = new Product();
  stringSearch: string;
  spinner: boolean = false;



  constructor(private formBuilder: FormBuilder,private productService: ProductsService, private searchService: SearchService) {
      this.CreateForm();
  }


  CreateForm(){
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      status: false
    });
  }

  CreateProduct(){
    this.spinner = true;
    if (this.productForm.invalid) {
      this.spinner = false;
      alert("¡Error!");
      return;
    }
    this.newProduct = Object.assign(this.newProduct, this.productForm.value);
    this.productService.createProduct(this.newProduct).subscribe(result=> {
      if(result){
        this.spinner = false;
        alert(`Producto ${result.name} registrado con Exito!`);
        this.newProductModal.hide();
        window.location.reload();
      }
      this.spinner = false;
    });
  }

  OpenModal(){
    this.newProductModal.show();
  }

  CloseModal(){
    this.newProductModal.hide();
    this.newProduct = new Product();
  }

  SetFilter(filter: string){
    this.searchService.filter.next(filter);
  }


}
