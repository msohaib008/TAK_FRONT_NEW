import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myForm:FormGroup=new FormGroup({
    userName:new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    email:new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?#&^)(_-])[A-Za-z\d$@$!%#*?&^)(_-].{7,}")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
  })

  
  getUserData(){
		let data = this.myForm.value;
		console.log(data);
	}

}
