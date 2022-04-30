import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
})
export class RegisterUserComponent implements OnInit {

  constructor(private _auth: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  myForm:FormGroup=new FormGroup({
    username:new FormControl('', [Validators.required,  Validators.pattern('^[A-Za-z0-9 ]+$')]),
    email:new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?#&^)(_-])[A-Za-z\d$@$!%#*?&^)(_-].{7,}")]),
    phoneNumber:new FormControl('', [Validators.required,  Validators.pattern('^[0-9]*$')]),

  })

  
  getUserData(){
		let data = this.myForm.value;
		console.log(data);    
    debugger;
    this._auth.RegisterUser(data)
    .subscribe(res => {
        if(res){
           var x : any = res;
          console.log(x.token);
        }      
    });

  }
}
