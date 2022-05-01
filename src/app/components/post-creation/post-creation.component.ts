import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileValidators } from 'ngx-file-drag-drop';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {

  myForm:FormGroup=new FormGroup({
    postType:new FormControl('', [Validators.required]),
    postTitle:new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z][A-Za-z0-9 ]*$')]),
    postDescription:new FormControl('', [Validators.pattern('^[a-zA-Z][A-Za-z0-9 ]*$')]),
    supportType:new FormControl('', []),
    post_fund: new FormControl('', []),

  })


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
  thirdTab:boolean = true;
  fourthTab:boolean = this.myForm.controls['supportType'].value == '' ? true : false;
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
  
  
  createPost(){
    console.log("myform",this.myForm);
  }
  selectPostType(data:any){

  }
  setTabTwo(){
   if(this.myForm.invalid) return;
   else this.secondTab = false;
  }


  ////////////////////////////////////////
  skillOptions=[
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

  favoriteSeason: string;
  seasons: string[] = ['Funds', 'Skills', 'Both'];
  areaToInvest = [];


  
  public files: NgxFileDropEntry[] = [];

  newFile:any;

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.thirdTab = false;
          this.newFile = droppedFile.relativePath;

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath+'gggggggg', fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

  selectAreaOfInterest(data:any){
    let lastSelectedValue = this.skillOptions.find((option:any)=>option.areaID == data.value);
    const isChecked = data.selected;
    if(isChecked)
      this.areaToInvest.push(lastSelectedValue);
    else
      this.areaToInvest = this.skillOptions.filter((option)=>option.areaID != data.value);
    console.log(`onselectchange:${JSON.stringify(lastSelectedValue)}:${isChecked}`)
  }


}
