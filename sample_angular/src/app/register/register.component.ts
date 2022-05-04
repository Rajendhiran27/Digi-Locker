// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
// import { Register } from './register';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   registrationForm: any;
//   // register =new Register('','','',[]);
//   // user = new Register('', '', '', []);
//   isRegistered = false;
//   submitted = false;
//   errorMessage = '';
//  hide=true;

//   constructor(private router:Router) { }
//   login(){
//     this.router.navigate(['/signin']);
//   }
//   ngOnInit(): void {
//     this.registrationForm = new FormGroup({
//       userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
//       // roleSelection: this.createRoles(this.roles)
//   });
 
//   }

// }
import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Register } from './register';
import {RegisterService} from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 hide=true;
 
register: Register = new Register();
constructor(private registerService: RegisterService,
  private router: Router) { }

ngOnInit(): void {
}

saveRegister(){
  this.registerService.createRegister(this.register).subscribe( data =>{
    console.log(data);
    this.goToEmployeeList();
  },
  error => console.log(error));
}
// login(){
//       this.router.navigate(['/signin']);
//     }

goToEmployeeList(){
  this.router.navigate(['/signin']);
}

onSubmit(){
  console.log(this.register);
  this.saveRegister();
}
}
