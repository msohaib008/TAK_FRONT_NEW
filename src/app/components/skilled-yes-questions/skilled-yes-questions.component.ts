import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';


@Component({
  selector: 'app-skilled-yes-questions',
  templateUrl: './skilled-yes-questions.component.html',
  styleUrls: ['./skilled-yes-questions.component.scss']
})
export class SkilledYesQuestionsComponent implements OnInit {

  fileName = '';
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  //file: File = null; // Variable to store file

  arrayNewDynamicFeildsFormControllNames:any = []
  
  totalFeilds = [ {fromDB: 'Alpha'} , { fromDB: 'Beta' } ]  //for suggestions
  areaToInvest = [{ name: 'Artificial Intelligence' }, {name: 'Machine Learning'}, {name: 'Fintech'}];


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  


  // onFileSelected(event: any) {

  //   const file:File = event.target.files[0];

  //   if (file) {

  //       this.fileName = file.name;
  //       debugger;
  //      // const formData = new FormData();

  //    //   formData.append("thumbnail", file);

  //      // const upload$ = this.http.post("/api/thumbnail-upload", formData);

  //      // upload$.subscribe();
  //   }
  // }


  //adding value enter key press
  onBlurEvent(event: any){
    console.log(event.target.value);
    var obj = {
      name: event.target.value
    }
    if(event.target.value === ""){
      //mt
    } else {
      const isFound = this.areaToInvest.some(element => {
        if (element.name === event.target.value) {
          return true;
        } else {
          return false;
        }
      });
      if(isFound){
        //left
      } else {
        this.areaToInvest.push(obj);
      }
    }
 }


  addData(event: any){
    alert(event.target.value)
  }

  remove(item: any): void {
    const index = this.areaToInvest.indexOf(item);

    if (index >= 0) {
      this.areaToInvest.splice(index, 1);
    }
  }

  constructor(private _auth: AuthenticationServiceService) { }

  ngOnInit(): void {
    
  }

  myForm:FormGroup=new FormGroup({
    FeildOfInterest:new FormControl('', [Validators.required,  Validators.pattern('^[A-Za-z0-9 ]+$')]),
    AttachLink: new FormControl('',[Validators.required]),
   
  })

  addFormControllName(value:string){
    //if contains any feild with space then needed to be underscored
    value = value.replace(" ", "_");
    this.myForm.addControl(value, new FormControl(''));
    var obj = { 
      name: value
    }
    this.arrayNewDynamicFeildsFormControllNames.push(obj);
  }


  AddTag(){
    let data = this.myForm.value;
    console.log(data)
  }



  getUserData(){
		let data = this.myForm.value;
		console.log(data);    
    debugger;
    

  }

}
