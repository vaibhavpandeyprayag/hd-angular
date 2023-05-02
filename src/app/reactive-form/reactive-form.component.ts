import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl("", Validators.required),
    language: new FormControl("", Validators.required),
  })
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get dob() { return this.myForm.get('dob'); }
  get language() { return this.myForm.get('language'); }

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

  defaultMsg = "Default Invisible Message."

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
    this.myForm.controls.language.setValue("english");
  }
}
