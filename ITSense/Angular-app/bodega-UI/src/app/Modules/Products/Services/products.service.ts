import { Injectable } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";
import { Product } from "../Models/Product";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable(
  {providedIn: 'root',}
  )
export class ProductsService{

  private _url = 'https://localhost:44340/api/';
  private _endpoint = 'Product/'


  constructor(private http: HttpClient) {
  }

  getProducts(off: number,name: string =''): Observable<Product[]>{
    // const limit = '&limit=100';
    // const modified = '';
    // const offset = '&offset=';
    // let nameStartsWith = '';
    // const order = '';
    // if(name!='')
    // {
    //   nameStartsWith=`&nameStartsWith=${name}`;
    // }
    // ${nameStartsWith}${modified}${order}${offset}${off}${limit}
    return this.http.get<Product[]>(`${this._url}${this._endpoint}`);

  }

  getProduct(id:Guid): Observable<Product>{
    return this.http.get<Product>(`${this._url}${this._endpoint}${id}`);
  }

  deleteProduct(id:Guid){
    return this.http.delete(`${this._url}${this._endpoint}${id}`);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this._url}${this._endpoint}`,product);
  }

  updateProduct(id:Guid, product:Product): Observable<Product>{
    return this.http.put<Product>(`${this._url}${this._endpoint}${id}`,product);
  }

}
