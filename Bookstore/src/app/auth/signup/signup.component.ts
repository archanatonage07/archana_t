import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  namevariable: any;
  Archana: any





  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private client: HttpClient


    // private authservice:authServies//
  ) { }



  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signupForm = this.formbuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      },

    );
  }
  signup() {
    this.router.navigate(['./auth/sign-up']);

  }
  forgot() {
    this.router.navigate(['./auth/forgot']);

  }
  onSave() {
    debugger
    var name = this.signupForm.get('name')?.value
    var emailid = this.signupForm.get('email')?.value
    var password = this.signupForm.get('password')?.value


    const callApi = {
      name: 'name',
      email: 'emailid',
      password: 'password'
    }
    var myhealder={
      "content-type":"application/json",
  "token":"skjfghjsdd"
    }
  

    this.client.post('http://localhost/BookStore/api/Customer/SaveCustomer', callApi,{headers:myhealder}).subscribe((Response: any) => {
      debugger
      this.Archana = Response.Archana
    })
  }
}

  
































