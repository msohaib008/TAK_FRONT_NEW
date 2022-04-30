import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/_services/authentication-service.service';



export interface PeriodicElement {
  skill: string;
  yearsOfExperience: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { skill: "AI", yearsOfExperience: 12 },
  // { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  // { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  // { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];



@Component({
  selector: 'app-skilled-reject-questions',
  templateUrl: './skilled-reject-questions.component.html',
  styleUrls: ['./skilled-reject-questions.component.scss']
})
export class SkilledRejectQuestionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  areaToInvest = [{ name: 'AI' }, { name: 'Blockchain' }, { name: 'Fintech' }];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  

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
    DescribeProduct:new FormControl('', [Validators.required]),
    Budget: new FormControl('',[Validators.required]),
  })

  
  getUserData(){
		let data = this.myForm.value;
		console.log(data);    
    debugger;
    this._auth.RegisterSkilledUser(data)
    .subscribe(res => {
        if(res){
           var x : any = res;
          console.log(x.token);
        }      
    });

  }


}
