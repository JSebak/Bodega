import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsListComponent } from './Modules/Products/Components/ProductList/productList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { CardComponent } from './Shared/Components/CardComponent/card.Component';
import { ProductComponent } from './Modules/Products/Components/Product/product.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {TableComponent} from './Shared/Components/Table/table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    CardComponent,
    ProductComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
