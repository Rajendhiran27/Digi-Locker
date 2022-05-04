import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './locker/credential/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './locker/credential/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './locker/credential/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './locker/credential/employee-details/employee-details.component';
import { CreateBankComponent } from './locker/Bank-Locker/create-bank/create-bank.component';
import { DetailsBankComponent } from './locker/Bank-Locker/details-bank/details-bank.component';
import { ListBankComponent } from './locker/Bank-Locker/list-bank/list-bank.component';
import { UpdateBankComponent } from './locker/Bank-Locker/update-bank/update-bank.component';
import { MediaComponent } from './locker/media/media.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'home',component:HomepageComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'create-bank',component:CreateBankComponent},
  {path: 'bank-details/:id',component:DetailsBankComponent},
  {path: 'bank-list',component:ListBankComponent},
  {path: 'update-bank/:id',component:UpdateBankComponent},
  {path:'media-locker',component:MediaComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-login',component: AdminloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
