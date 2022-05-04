import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  login:Login=new Login();
  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
  }
    credential(){
    this.router.navigate(['/home']);
  }
  userLogin(){
    console.log(this.login)
    this.loginservice.loginUser(this.login).subscribe(data=>{
      alert("Login Successfully")
      this.credential();
    },error=>alert("Please Enter valid Credential"));
  }

}

