import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  postData: any = {};
  apiData: any;
  filteredApiData: any[] = [];
  searchTerm: string = '';
  selectedUserIds: number[] = [];
  constructor(private serviceService: ServiceService) {}
  ngOnInit(): void {
    this.userList();
  }
  userList(){
    this.serviceService.getUser(this.postData).subscribe((data)=>{
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
      item.username.toLowerCase().includes(lowerSearchTerm) ||
      item.email.toLowerCase().includes(lowerSearchTerm) ||
      item.id.toString().includes(lowerSearchTerm)
    );
  }
  deleteClient(clientId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.serviceService.deleteUser(clientId).subscribe(() => {
        this.userList();
      });
    }
  }
}
