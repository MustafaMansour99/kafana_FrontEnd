import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit{
  postData: any = {};
  apiData: any;
  filteredApiData: any[] = [];
  searchTerm: string = '';
  selectedUserIds: number[] = [];
  constructor(private serviceService: ServiceService) {}
  ngOnInit() {
    this.getAccountList();
  }

  getAccountList(){
    this.serviceService.getAccount(this.postData).subscribe((data)=>{
      this.apiData=data
      console.log("apidata",this.apiData)
      this.filteredApiData = [...this.apiData];
    })
}
applyFilter() {
  if (!this.searchTerm) {
    this.filteredApiData = [...this.apiData];
    return;
  }

  this.filteredApiData = this.apiData.filter((item:any) =>
    this.matchSearchTerm(item)
  );
}

matchSearchTerm(item: any): boolean {
  const lowerSearchTerm = this.searchTerm.toLowerCase();

  return (
    item.account_number.toLowerCase().includes(lowerSearchTerm) ||
    item.user_id.toString().includes(lowerSearchTerm) ||
    item.id.toString().includes(lowerSearchTerm)
  );
}
}
