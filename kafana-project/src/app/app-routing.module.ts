import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AccountComponent } from './account/account.component';
import { AccountlistComponent } from './accountlist/accountlist.component';

const routes: Routes = [
  {
  path:'users/:id',
  component:UsersComponent
  },
  {
  path:'users',
  component:UsersComponent
  },
  {
    path:'userslist',
    component:UserslistComponent
  },
  {
    path:"account",
    component:AccountComponent
  },
  {
    path:"accountlist",
    component:AccountlistComponent
  },
  {
    path:"account/:id",
    component:AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
