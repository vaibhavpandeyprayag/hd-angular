import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor(private http: HttpClient) {}


  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl("", Validators.required),
    language: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern("[6-9][0-9]*")]),
  });
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get dob() { return this.myForm.get('dob'); }
  get language() { return this.myForm.get('language'); }
  get gender() { return this.myForm.get('gender'); }
  get phone() { return this.myForm.get('phone'); }

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

  onSubmit() {
    if (this.myForm.invalid) {
      this.name?.markAsDirty();
      this.email?.markAsDirty();
      this.dob?.markAsDirty();
      this.language?.markAsDirty();
      this.gender?.markAsDirty();
      this.phone?.markAsDirty();
      return;
    } 
    console.log({name: this.name, email: this.email, dob: this.dob, language: this.language, gender: this.gender, phone: this.phone});
    const req = this.http.post("http://localhost:3000/sendmail", 
    {
      name: this.name?.value,
      email: this.email?.value,
      dob: this.dob?.value,
      language: this.language?.value,
      gender: this.gender?.value,
      phone: this.phone?.value
    });
    req.subscribe();
  }
}
