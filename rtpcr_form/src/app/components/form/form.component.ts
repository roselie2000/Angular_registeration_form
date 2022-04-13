import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  title = 'rtpcr_form';
  store:any=[];
  input:any;
  headers=["Person Name","Aadhar Number","Date of Birth","City","Date of test", "Time of test","Gender", "Labname",
  "Report Number","Result"];

  constructor() { 
  }

  searchvalue:any=[];

  ngOnInit(): void {
  }
  
registerForm = new FormGroup({
  name: new FormControl("", [Validators.required]),
  adrno: new FormControl("", [Validators.required]),
  dob: new FormControl("", [Validators.required]),
  city: new FormControl("", [Validators.required]),
  dtest: new FormControl("", [Validators.required]),
  ttest: new FormControl("", [Validators.required]),
  res: new FormControl("", [Validators.required]),
  lname: new FormControl("", [Validators.required]),
  report: new FormControl("", [Validators.required]),
  gender: new FormControl("", [Validators.required])
});

resSubmit() {
  console.warn(this.registerForm.value);
}

add(){
  console.log(this.store.push(this.registerForm.value));
  console.log(this.store);
  this.registerForm.reset();
}

}


