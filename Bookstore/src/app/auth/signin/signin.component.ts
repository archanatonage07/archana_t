import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin.',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class signinComponent implements OnInit {
    signinForm!: FormGroup
    entries: any
    message: any;


    constructor(
        private formbuilder: FormBuilder,
        private router: Router,
        private Archana: HttpClient
        //private authservice:authservice,
    ) { }
    ngOnInit(): void {
        this.initForm();
    }
    initForm() {
        this.signinForm = this.formbuilder.group(
            {
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
            },
        );
    }
    signin() {
        this.router.navigate(['/auth/sign-up']);

    }
    forgot() {
        this.router.navigate(['./auth/forgot']);
    }
    onsave() {
        const signinForm = this.signinForm.value;
        debugger
        var emailid=this.signinForm.get('email')?.value
        var password=this.signinForm.get('password')?.value

        var callApi={
            emailid:"archana@gmail.com",
            password:"12345"
        }

     }
    callApi() {
        
        var myhealder={
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
          }
        this.Archana.post('https://api.publicapis.org/entries/api/Login/Login',this.callApi,{headers:myhealder}).subscribe((Response:any) =>{
            debugger;
            this.message=Response.body;
            var userToken=Response.headers.get('token');
            localStorage.setItem('TokenAfterLogin',userToken)
            })
        }
    }








