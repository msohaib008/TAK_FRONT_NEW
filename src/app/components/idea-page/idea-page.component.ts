import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';

@Component({
  selector: 'app-idea-page',
  templateUrl: './idea-page.component.html',
  styleUrls: ['./idea-page.component.scss']
})
export class IdeaPageComponent implements OnInit {
  constructor(private _auth: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  myForm:FormGroup=new FormGroup({
    ideaHead:new FormControl('', [Validators.required]),
    ideabody:new FormControl('', [Validators.required])
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
