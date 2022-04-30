import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileValidators } from 'ngx-file-drag-drop';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {


  constructor() { }
  options=[
    {
      "postTypeID": "1",
      "postType": "Idea"
    },
    {
      "postTypeID": "2",
      "postType": "Prototype"
    },
  ];
  secondTab:boolean=true;
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onValueChange(file: File[]) {
    console.log("File changed!", file);
  }
  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log(this.fileControl.value, this.fileControl.valid)
    );
  }
  myForm:FormGroup=new FormGroup({
    postType:new FormControl('', [Validators.required]),
    postTitle:new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z][A-Za-z0-9 ]*$')]),
    postDescription:new FormControl('', [Validators.pattern('^[a-zA-Z][A-Za-z0-9 ]*$')]),
  })
  
  createPost(){
    console.log("myform",this.myForm);
  }
  selectPostType(data:any){

  }
  setTabTwo(){
   if(this.myForm.invalid) return;
   else this.secondTab = false;

  }




}
