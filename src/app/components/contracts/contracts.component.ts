import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export class PeriodicElement {
 
  public name: string;
  public type: string;
  public startDate: string;
  public amount: string;
  public status: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Darlene Robertson', type: 'Traditional', startDate: 'mar 4, 2021', amount: '$200 USD', status:'active'},
  {name: 'Darlene Robertson', type: 'Traditional', startDate: 'mar 4, 2021', amount: '$200 USD', status:'active'},
  {name: 'Darlene Robertson', type: 'Traditional', startDate: 'mar 4, 2021', amount: '$200 USD', status:'signature pending'},

];

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements AfterViewInit {
  

  contractype = new FormControl('');
  contractTypeList: string[] = ['Traditional', 'Normal', 'Common'];

  status = new FormControl('');
  statusList: string[] = ['Active', 'Inactive', 'Signature pending'];
  
  displayedColumns: string[] = [ 'name', 'type', 'startDate' , 'amount' , 'status', 'Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

    filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}