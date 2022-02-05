import { SelectionModel } from '@angular/cdk/collections';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableButtonAction, TableColumn } from '../../Models/TableModels/tableModels';


@Component({
  selector: 'TableComponent',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
  @Input() columns: Array<TableColumn>;
  @Input() dataSet: Array<any> = [];

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    // set checkbox column
   this.displayedColumns.push("select");

   // set table columns
   this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));    // pre-fix static

   // add action column
   this.displayedColumns.push("action");
   this.dataSource = new MatTableDataSource<any>(this.dataSet);

   // set pagination
   this.dataSource.paginator = this.paginator;
 }
}
