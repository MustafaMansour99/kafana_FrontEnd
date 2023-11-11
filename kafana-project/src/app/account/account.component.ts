import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Account } from './Account';
import * as moment from 'moment-timezone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
account:Account;
ID:string ="";
User_ID:number=0;
Server_DateTime:string="";
DateTime_UTC:string="";
Update_DateTime_UTC:string="";
Account_Number:string="";
Balance:string="";
Currency:string="";
Status:number = 1;
isUpdate:boolean = false;
id:string="";

constructor(private userService: ServiceService, private router: Router, private route: ActivatedRoute){
  this.account={
    ID:"",
    User_ID:1,
    Server_DateTime:"",
    DateTime_UTC:"",
    Update_DateTime_UTC:"",
    Account_Number:"",
    Balance:"",
    Currency:"",
    Status:1
  };
}



ngOnInit(): void {
  const serverTimeZone = 'Asia/Amman';
  this.DateTime_UTC = moment.utc().tz(serverTimeZone).format();
  this.Server_DateTime = moment().tz(serverTimeZone).format();
  this.Update_DateTime_UTC = moment().tz(serverTimeZone).format();

  this.route.paramMap.subscribe((params) => {
    const clientId = params.get('id');
    if (clientId) {
      this.isUpdate = true;
      this.id = clientId;
      this.fetchAccountDetails(clientId)
    }
  });
}
fetchAccountDetails(id: string) {
  this.userService.getAccounData(id).subscribe((accountdata) => {
    this.account = accountdata;
    console.log('data from id', this.account);
  });
}
onSubmit() {
  const userTimeZone = 'Asia/Amman';
  this.account = {
    ID: this.ID,
    User_ID:this.User_ID,
    Server_DateTime: moment().tz(userTimeZone).format(),
    DateTime_UTC: moment().utc().format(),
    Update_DateTime_UTC: moment().utc().format(),
    Account_Number:this.Account_Number,
    Balance:this.Balance,
    Currency:this.Currency,
    Status:this.Status
  };
  if (this.isUpdate) {
    this.updateAccountData(); // Call the update method
  }else {
    this.userService.addAccount(this.account).subscribe((data) => {
      console.log("data: ", data);
      this.router.navigate(['/accountlist']);
    });
  }
}

updateAccountData() {
  this.userService.updateAccount(this.id, this.account).subscribe((updatedUser) => {
    console.log("Updated User", updatedUser);
    this.router.navigate(['/accountlist']);
  });
}

userList() {
  this.router.navigate(['/accountlist']);
}
}
