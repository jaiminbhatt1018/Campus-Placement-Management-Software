import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sheduled-pptlist',
  templateUrl: './sheduled-pptlist.component.html',
  styleUrls: ['./sheduled-pptlist.component.scss']
})
export class SheduledPPTListComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  
  constructor(
    private services: CommonApisService,
  ) {}
  IsCommiteeLogin=true;
  ngOnInit(): void {

    this.fetchSheduledList();
  }

  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'IntrestedStudents',
    'Date',
    'Venue',
  ];

  fetchSheduledList(){
this.services.getSheduledlist().subscribe((data:any)=>{
this.dataSource=data;
})
  }
}
