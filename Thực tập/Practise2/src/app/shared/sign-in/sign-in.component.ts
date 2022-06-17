import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/core/services/sign-in/sign-in.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // userName : string;
  // password : string;

  signInForm : FormGroup;

  constructor(private signin_sv : SignInService, private fb : FormBuilder, private router : Router) { 
    this.signInForm = this.fb.group({
      userName : ['', [Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  signIn() {
    let account = {
      userName : this.signInForm.get('userName')?.value,
      password : this.signInForm.get('password')?.value
    }
    console.log(account);
    if (this.signin_sv.signIn(account)) {
      // ($('#signIn') as any).modal('hide');
      console.log("isAUthorize: ", this.signin_sv.isAuthorize);
      this.router.navigateByUrl("/user-list");
    }
    else {
      alert("Sign in failed")
    }
  }

}
