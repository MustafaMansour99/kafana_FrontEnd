import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserslistComponent } from './userslist/userslist.component';
import { AccountComponent } from './account/account.component';
import { AccountlistComponent } from './accountlist/accountlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserslistComponent,
    AccountComponent,
    AccountlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
