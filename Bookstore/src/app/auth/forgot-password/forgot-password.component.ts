import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    // private authservice:authservice//
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.forgotForm = this.formbuilder.group({
      email: ['',[Validators.required,Validators.email]],
    },
    );
  }
  forgot(){
    this.router.navigate(['./auth/forgot']);
  }
  onsave(){
    this.router.navigate(['./auth/forgot'])
  }

}
