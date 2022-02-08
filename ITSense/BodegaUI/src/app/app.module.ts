import { NgxPaginationModule } from 'ngx-pagination';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './Modules/Products/Components/ProductList/productList.component';
import { dashboard } from './Modules/Dashboard/dashboard.component';
import { navbar } from './Modules/Shared/Components/Nav/navbar.component';
import { LoadingSpinner } from './Modules/Shared/Components/Spinner/spinner.component';
import { ProductComponent } from './Modules/Products/Components/Product/product.component';
import { DropdownComponent } from './Modules/Shared/Components/Dropdown/dropdown.component';


@NgModule({
  declarations: [
    dashboard,
    AppComponent,
    navbar,
    LoadingSpinner,
    ProductsListComponent,
    ProductComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
