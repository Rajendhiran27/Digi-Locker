import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from'@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { EmployeeListComponent } from './locker/credential/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './locker/credential/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './locker/credential/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './locker/credential/employee-details/employee-details.component';
import { CreateBankComponent } from './locker/Bank-Locker/create-bank/create-bank.component';
import { DetailsBankComponent } from './locker/Bank-Locker/details-bank/details-bank.component';
import { ListBankComponent } from './locker/Bank-Locker/list-bank/list-bank.component';
import { UpdateBankComponent } from './locker/Bank-Locker/update-bank/update-bank.component';
import { MediaComponent } from './locker/media/media.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CreateBankComponent,
    DetailsBankComponent,
    ListBankComponent,
    UpdateBankComponent,
    MediaComponent,
    AdminComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
