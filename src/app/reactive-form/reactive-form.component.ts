import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    dob: new FormControl(""),
    language: new FormControl(""),
  })
  
  languages: Object[] = [
    {
      value: 0,
      language: "English",
    },
    {
      value: 1,
      language: "Hindi",
    },
    {
      value: 2,
      language: "Marathi",
    },
    {
      value: 3,
      language: "Bengali",
    },
  ]

  setName() {
    this.myForm.controls.name.setValue("Hello");
  }
  setEmail() {
    this.myForm.controls.email.setValue("vaibhavpandeyprayag@gmail.com");
  }
  setDob() {
    this.myForm.controls.dob.setValue("2002-02-11");
  }
  setLanguage() {
    this.myForm.controls.language.setValue("0");
  }
}
