import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { MatSuffix } from '@angular/material/form-field';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';

@Component({
  selector: 'app-register-investor',
  templateUrl: './register-investor.component.html',
  styleUrls: ['./register-investor.component.scss']

})
export class RegisterInvestorComponent implements OnInit {
  @ViewChild('chipList') chipList: any;
  constructor(private _auth: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  visible = true;
  selectable = true;
  removable = true;

  selectable_2 =true;
  removable_2 = true;
  addOnBlur = true;
  options=[
    {
      "areaID": "f8b8f7ba-c45c-433f-96f8-14edf0c1d8c7",
      "areaDescription": "Artificial Inteligence"
    },
    {
      "areaID": "61b86877-c880-41c4-a1e4-884b26275c28",
      "areaDescription": "Blockchain"
    },
    {
      "areaID": "56334164-2668-4718-9b28-bf26a22df86f",
      "areaDescription": "Fintech"
    }
  ];



  areaToInvest = [];
  areaOfExperience = [];

  

  remove(item: any): void {
    const index = this.areaToInvest.indexOf(item);

    if (index >= 0) {
      this.areaToInvest.splice(index, 1);
    }
  }

  selectedAreaOfInterest(item:any){
    console.log("item:",item);
  }

  selectedChips: any[] = [];
  selectedEXperienceChip: any[] = [];

changeSelected(parameter: string, query: string) {

  const index = this.selectedChips.indexOf(query);
  if (index >= 0) {
    this.selectedChips.splice(index, 1);
  } else {
    this.selectedChips.push(query);
  }
  console.log('this.selectedChips: ' + JSON.stringify(this.selectedChips));
}

changeSelectedExperience(parameter: string, query: string) {

  const index = this.selectedEXperienceChip.indexOf(query);
  if (index >= 0) {
    this.selectedEXperienceChip.splice(index, 1);
  } else {
    this.selectedEXperienceChip.push(query);
  }
  console.log('this.selectedEXperienceChip: ' + JSON.stringify(this.selectedEXperienceChip));
}


  // FeildsOfInterest = [{ name: 'AI' }, { name: 'Blockchain' }, { name: 'Fintech' }];

  removex(item: any): void {
    const index = this.areaOfExperience.indexOf(item);

    if (index >= 0) {
      this.areaOfExperience.splice(index, 1);
    }
  }

  selectAreaOfInterest(data:any){
    let lastSelectedValue = this.options.find((option:any)=>option.areaID == data.value);
    const isChecked = data.selected;
    if(isChecked)
      this.areaToInvest.push(lastSelectedValue);
    else
      this.areaToInvest = this.options.filter((option)=>option.areaID != data.value);
    console.log(`onselectchange:${JSON.stringify(lastSelectedValue)}:${isChecked}`)
  }

  selectAreaOfExperience(data:any){
    let lastSelectedValue = this.areaToInvest.find((option:any)=>option.areaID == data.areaID);
    let check = this.areaOfExperience.find((option:any)=>option.areaID == data.areaID);
    console.log("check:",check);
    if(check==undefined)
    this.areaOfExperience.push(lastSelectedValue);
    console.log(`onselectchange::${JSON.stringify(lastSelectedValue)}`)
  }


  myForm:FormGroup=new FormGroup({
    username:new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z][A-Za-z0-9 ]*$')]),
    email:new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?#&^)(_-])[A-Za-z\d$@$!%#*?&^)(_-].{7,}")]),
    phoneNumber:new FormControl('', [Validators.required,  Validators.pattern('^[0-9]*$')]),
    investor_BudgetToInvest: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]*$') ,Validators.min(5), Validators.max(50)]),
    AreaToInvest: new FormControl('', [Validators.required]),
    chipList: new FormControl('', []),
  })

  
  getUserData(){
		let data = this.myForm.value;
		console.log(data);    
    console.log("form-value:",this.myForm.value);
    console.log("chip:",this.chipList);
    let postOptions= [];
    this.areaToInvest.map((option)=>{
      postOptions.push(option.areaDescription)
    });
    let experienceOptions = [];
    this.areaOfExperience.map((item,index)=> experienceOptions.push(item.areaDescription))
    let userModel = {
      userId:1,	//id that will be given by register controller
      BudgetAmount:	this.myForm.controls['investor_BudgetToInvest'].value,//from input
      toalList : this.options,
      lTotalFeildsToInvestSelected : postOptions, //must select from toalList
      feildPreviousExperience : experienceOptions //values from TotalFeildsToInvestSelected
    };
    console.log("userModel:",userModel);
  
    debugger;
    this._auth.RegisterUser(userModel)
    .subscribe(res => {
        if(res){
           var x : any = res;
          console.log(x.token);
        }      
    });

  }

  registerInvestor(){
    console.log("form-value:",this.myForm.value);
    console.log("chip:",this.chipList)
  }
}
