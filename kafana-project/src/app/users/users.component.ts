// import { Component, OnInit } from '@angular/core';
// import { ServiceService } from '../service.service';
// import { User } from './User';
// import * as moment from 'moment-timezone';
// import { ActivatedRoute, Router } from '@angular/router';
// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit{
//   ID:string="";
//   Server_DateTime:string="";
//   DateTime_UTC:string="";
//   Update_DateTime_UTC:string="";
//   Username:string="";
//   Email:string="";
//   First_Name:string="";
//   Last_Name:string="";
//   Status:number=0;
//   Gender:number=0;
//   Date_Of_Birth:string="";
//   user:User
//   isUpdate: boolean=false;
//   id: string="";
// constructor(private userService: ServiceService, private router: Router,
//   private route: ActivatedRoute){
//   this.user={
//     ID:"",
//     Server_DateTime:"",
//     DateTime_UTC:"",
//     Update_DateTime_UTC:"",
//     Username:"",
//     Email:"",
//     First_Name:"",
//     Last_Name:"",
//     Status:0,
//     Gender:1,
//     Date_Of_Birth:""
//   };
// }

// ngOnInit(): void{
//   const serverTimeZone = 'Asia/Amman';
//   this.DateTime_UTC = moment.utc().tz(serverTimeZone).format();
//   this.Server_DateTime = moment().tz(serverTimeZone).format();
//   this.Update_DateTime_UTC = moment().tz(serverTimeZone).format();

//   this.route.paramMap.subscribe((params) => {
//     const clientId = params.get('id');
//     if (clientId) {
//       this.isUpdate = true;
//       this.id=clientId
//       this.fetchUserDetails(clientId);
//     }
//   });
// }
// fetchUserDetails(id: string) {
//   this.userService.getUsertData(id).subscribe((userdata) => {
//     this.user = userdata;
//     console.log('data from id', this.user);
//   });
// }
// onSubmit(){
//   const userTimeZone = 'Asia/Amman';
//   console.log('User before update:', this.user);
//   this.user={
//     ID: this.ID,
//     Server_DateTime:moment().tz(userTimeZone).format(),
//     DateTime_UTC:moment().utc().format(),
//     Update_DateTime_UTC:moment().utc().format(),
//     Username:this.Username,
//     Email:this.Email,
//     First_Name:this.First_Name,
//     Last_Name:this.Last_Name,
//     Status:this.Status,
//     Gender:this.Gender,
//     Date_Of_Birth:this.Date_Of_Birth
//   }
//   this.userService.addUser(this.user).subscribe((data) => {
//     console.log("data: ", data);
//   });
//   // if (this.isUpdate) {
//   //
//   // } else {
//   //
//   // }
//   }
//   // updateClientData() {
//   //   this.userService.updateUser(this.id, this.user).subscribe((updatedUser) => {
//   //     console.log("Updated User", updatedUser);
//   //     this.router.navigate(['/userslist']);
//   //   });
//   // }


// }

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from './User';
import * as moment from 'moment-timezone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ID: string = "";
  Server_DateTime: string = "";
  DateTime_UTC: string = "";
  Update_DateTime_UTC: string = "";
  Username: string = "";
  Email: string = "";
  First_Name: string = "";
  Last_Name: string = "";
  Status: number = 1;
  Gender: number = 0;
  Date_Of_Birth: string = "";
  user: User;
  isUpdate: boolean = false;
  id: string = "";

  constructor(private userService: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.user = {
      ID: "",
      Server_DateTime: "",
      DateTime_UTC: "",
      Update_DateTime_UTC: "",
      Username: "",
      Email: "",
      First_Name: "",
      Last_Name: "",
      Status: 1,
      Gender: 1,
      Date_Of_Birth: ""
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
        this.fetchUserDetails(clientId);
      }
    });
  }

  fetchUserDetails(id: string) {
    this.userService.getUsertData(id).subscribe((userdata) => {
      this.user = userdata;
      console.log('data from id', this.user);
    });
  }

  onSubmit() {
    const userTimeZone = 'Asia/Amman';
    this.user = {
      ID: this.ID,
      Server_DateTime: moment().tz(userTimeZone).format(),
      DateTime_UTC: moment().utc().format(),
      Update_DateTime_UTC: moment().utc().format(),
      Username: this.Username,
      Email: this.Email,
      First_Name: this.First_Name,
      Last_Name: this.Last_Name,
      Status: this.Status,
      Gender: this.Gender,
      Date_Of_Birth: this.Date_Of_Birth
    };

    if (this.isUpdate) {
      this.updateClientData(); // Call the update method
    }else {
      this.userService.addUser(this.user).subscribe((data) => {
        console.log("data: ", data);
        this.router.navigate(['/userslist']);
      });
    }
  }

  updateClientData() {
    this.userService.updateUser(this.id, this.user).subscribe((updatedUser) => {
      console.log("Updated User", updatedUser);
      this.router.navigate(['/userslist']);
    });
  }

  userList() {
    this.router.navigate(['/userslist']);
  }
}
