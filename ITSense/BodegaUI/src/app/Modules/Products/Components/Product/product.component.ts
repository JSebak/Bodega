import {Component,Input, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Product } from 'src/app/Modules/Products/Models/Product';
import { ProductsService } from 'src/app/Modules/Products/Services/products.service';



@Component({
  selector: 'ProductComponent',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  @Input() public product: Product ;
  mock: Product = new Product();

  @ViewChild('productModal',{static: true}) public productModal;
  @ViewChild('confirmationModal',{static: true}) public confirmationModal;
  @ViewChild('editModal',{static: true}) public editModal;
  editForm:FormGroup;

  spinner: boolean = false;
  options:["Edit","Delete"];
  modifiedProduct: Product = new Product();
  constructor(private productService: ProductsService, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      status: ['',[]]
    });
  }
  ngOnInit(): void {
    this.spinner=true;
    this.mock= this.product;
    this.modifiedProduct = this.product;
    this.editForm.controls["name"].setValue(this.mock.name);
    this.editForm.controls["status"].setValue(this.mock.status);
  }

  loadProduct(id: Guid){
    this.productService.getProduct(id).subscribe(result =>{
      let temp = result;
      this.product= temp;
    });
  }

  Dispatch(){
    this.confirmationModal.show();
  }

  UpdateProduct(){
    Object.assign(this.modifiedProduct,this.editForm.value);
    this.modifiedProduct;
    this.productService.updateProduct(this.modifiedProduct).subscribe(result =>
      {
        result != null ?  alert(`Se ha actualizado el producto ${this.modifiedProduct.name}`) : alert("Lo sentimos algo ha fallado, intentalo de nuevo");
        this.editModal.hide();
      });
  }

  Confirm(){
    this.productService.deleteProduct(this.mock.id).subscribe(result =>{
      if(result){
        alert("¡El producto fue despachado!")
        this.confirmationModal.hide();
        window.location.reload();
      }
    })
  }

  MenuSelected(selection: string){
    switch (selection) {
      case "Edit":
        this.editModal.show();
        break;
      case "Delete":
        this.productService.deleteProduct(this.product.id).subscribe(result => {
          if(result) {
            alert("Se ha eliminado el registro del producto");
            window.location.reload();
            return
          } else {
            alert("Lo sentimos, no se ha podido eliminar el registro del produto");
            return
          }
        });
        break;
      default:
        break;
    }

  }

  Open(){
    this.productModal.show();
  }
  CloseModal(){
    this.productModal.hide();
    this.editModal.hide();
  }
  CloseConfirmation(){
    this.confirmationModal.hide();
  }


}
