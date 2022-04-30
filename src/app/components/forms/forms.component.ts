import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {

  checked = true;


  constructor(private _router: Router,) { }

  ngOnInit(): void { }

  onBack(name: string, email: string, passowrd: string) {
    console.log("Ma Form ka Data ho ", {
      name: name,
      email: email,
      passowrd: passowrd
    });
  }
}