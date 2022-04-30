import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
})
export class LoginComponentComponent implements OnInit {

  constructor(private _auth: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  myForm:FormGroup=new FormGroup({
    email:new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?#&^)(_-])[A-Za-z\d$@$!%#*?&^)(_-].{7,}")]),
  })

  
  getUserData(){
		let data = this.myForm.value;
		console.log(data);
    
    debugger;
    this._auth.LoginUser(data)
    .subscribe(res => {
        if(res){
           var x : any = res;
          console.log(x.token);
        }      
    });

	}

  }
