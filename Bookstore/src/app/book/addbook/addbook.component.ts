import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addbook!: FormGroup
  entries: any


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private client: HttpClient
    // private bookService:bookservice,//
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addbook = this.formbuilder.group(
      {
        BookName: ['', [Validators.required]],
        BookPrice: ['', [Validators.required]],
        BookAuthor:['',[Validators.required]]     
       },
    );
  }
  bookform() {
    this.router.navigate(['./book/book-form']);
  }
  onsave() {
    const addbook = this.addbook.value;

    debugger
    var Bookname=this.addbook.get('Bookname')?.value
    var BookPrice=this.addbook.get('Bookprice')?.value
    var Bookauthor=this.addbook.get('Bookauthor')?.value

    const callApi ={
      Bookname:'Bookname',
      BookPrice:'Bookprice',
      Bookauthor:'Bookauthor'
    }
  }
  callApi(){
    var healder=
      {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
      }
    
  
    this.client.get('https://api.publicapis.org/entries').subscribe((resp:any)=>{
      debugger
      var count=resp.count
      this.entries=resp.entries
    })
  }
}

    

  





